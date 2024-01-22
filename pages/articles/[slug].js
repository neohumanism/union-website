import React from 'react';
import { Typography, Container } from '@mui/material';
import {lexer} from 'marked';
import styled from '@emotion/styled';
import parseMetadata from '../../components/parsedata';
import MetaBar from '../../components/metabar';
import { getDirectory, getFileProps } from '../../components/getstatics';
import he from 'he';

//import Image from 'next/image'; //use this instead of img


//ADD SUPPORT FOR PROCESSING SPECIAL CHARACTERS E:G: '
//MAKE LINKS COLORED AND UNDERLINED
//ADD IMAGE CUSTOMIZATION?

//add a theme provider that makes links underlined and colored and etc.

//put a content overview drawer on the left side

const Title = styled(Typography)`
  padding-bottom: 10px;
  padding-top: 15px;
`;

const Container1 = styled(Container)`
  @media (min-width: 900px) {
    width: 66%;
  }
`;

const ArticlePage = ({ data }) => {
  const metadata = parseMetadata(data);
  const match = data.match(/(?<=---[\s\S]*?---)[\s\S]*/); //not sure if this is a good way of doing it
  const content = match ? match[0].trim() : 'You screwed up the formatting.';

  const parseMarkdown = (markdownContent) => {
    const tokens = lexer(markdownContent);
    const elements = [];
    tokens.forEach((token, index) => {
      switch (token.type) {
        case 'hr':
          break;
        case 'heading':
          const adjustedDepth = Math.max(1, token.depth + 2);
          elements.push(React.createElement(Title, { key: index, variant: `h${adjustedDepth}`  }, token.text));
          break;
        case 'paragraph':
          elements.push(
            React.createElement(
              Typography,
              { key: index, style: {} },
              parseParagraphTokens(token.tokens)
            )
          );
          break;
        case 'space':
          elements.push(React.createElement('br', { key: index }));
          break;
        default:
          break;
      }
    });
    elements.push(React.createElement(MetaBar, { metadata: metadata }));
    return elements;
  };

  const parseParagraphTokens = (tokens) => {
    return tokens.map((token, index) => {
      switch (token.type) {
        case 'text':
          return he.decode(token.text);
        case 'image':
          return React.createElement('img', {
            key: index,
            src: token.href,
            alt: token.text,
            style: { maxWidth: '100%', height: 'auto' },
          });
        case 'link':
          return React.createElement(
            'a',
            { key: index, href: token.href, target: '_blank', rel: 'noopener noreferrer' },
            he.decode(token.text)
          );
        default:
          return null;
      }
    });
  };

  
  return (
    <Container1>
      <br/>
      <>{parseMarkdown(content)}</>
    </Container1>
  );

};

export async function getStaticPaths() {
  return getDirectory('articles', 'md');
};

export async function getStaticProps({ params }) {
  return getFileProps('articles', params.slug, 'md');
};

export default ArticlePage;

