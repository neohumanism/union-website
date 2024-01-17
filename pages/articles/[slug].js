import React from 'react';
import fs from 'fs';
import path from 'path';
import { Typography, Container } from '@mui/material';
import {lexer} from 'marked';
import styled from '@emotion/styled';
import parseMetadata from '../../components/parseMetadata';
import MetaBar from '../../components/metabar';
//import Image from 'next/image'; //use this instead of img


//ADD SUPPORT FOR PROCESSING SPECIAL CHARACTERS E:G: '
//MAKE LINKS COLORED AND UNDERLINED
//ADD IMAGE CUSTOMIZATION?

//add a theme provider that makes links underlined and colored and etc.

const Title = styled(Typography)`
  padding-bottom: 10px;
  padding-top: 15px;
`;

const Container1 = styled(Container)`
  @media (min-width: 900px) {
    width: 66%;
  }
`;

const ArticlePage = ({ article }) => {
  const { content, metadata } = article;

  const parseMarkdown = (markdownContent) => {
    const tokens = lexer(markdownContent);
    const elements = [];
    tokens.shift(); //dumb way of doing it, but whatever
    tokens.shift();
    tokens.forEach((token, index) => {
      switch (token.type) {
        //not sure how we'd add image support here, but eh
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
          return token.text;
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
            token.text
          );
        default:
          return null;
      }
    });
  };

  return (
    <Container1 sx={{}}>
      <br/>
      <div>{parseMarkdown(content)}</div>
    </Container1>
  );
};

export async function getStaticPaths() {
  const articlesDirectory = path.join(process.cwd(), 'articles');
  const fileNames = fs.readdirSync(articlesDirectory);

  const paths = fileNames.map((fileName) => ({
    params: { slug: fileName.replace(/\.md$/, '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) { //consolidate this with the one in articles.js
  const articlePath = path.join(process.cwd(), 'articles', `${params.slug}.md`);
  const content = fs.readFileSync(articlePath, 'utf-8');
  const metadata = parseMetadata(content);

  return {
    props: {
      article: {
        slug: params.slug,
        metadata: metadata,
        content,
      },
    },
  };
}

export default ArticlePage;

