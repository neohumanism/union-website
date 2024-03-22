import React from 'react';
import { Typography, Container } from '@mui/material';
import styled from '@emotion/styled';
import parseMetadata from '../../components/parsedata';
import { getDirectory, getFileProps } from '../../components/getstatics';
import parseMarkdown from '../../components/parsemd';
import MetaBar from '../../components/metabar';

//import Image from 'next/image'; //use this instead of img

//ADD SUPPORT FOR PROCESSING SPECIAL CHARACTERS E:G: '
//MAKE LINKS COLORED AND UNDERLINED
//ADD IMAGE CUSTOMIZATION?

//add a theme provider that makes links underlined and colored and etc.

//put a content overview drawer on the left side

//have a thing that grabs every header and gives an overview with links?

const Container1 = styled(Container)`
  @media (min-width: 900px) {
    width: 66%;
  }
`;

const ArticlePage = ({ data }) => {
  const metadata = parseMetadata(data);
  const match = data.match(/(?<=---[\s\S]*?---)[\s\S]*/); //not sure if this is a good way of doing it
  const content = match ? match[0].trim() : 'You screwed up the formatting.';

  return (
    <Container1>
      <br/>
      {parseMarkdown(content)}
      <MetaBar metadata={metadata}/>
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

