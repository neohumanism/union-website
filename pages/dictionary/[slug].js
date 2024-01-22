import React from 'react';
import fs from 'fs';
import path from 'path';
import { Typography, Container } from '@mui/material';


const DictionaryEntryPage = ({ data }) => {
  console.log(data);

  return (
    <Container>
      <br/>
      <div>gay</div>
    </Container>
  );
};
/*
export async function getStaticPaths() {
  return getStaticPathsByExtension('dictionary', 'md');
}

export async function getStaticProps({ params }) {
  return getStaticPropsByExtension('dictionary', params.slug, 'md');
}
*/
export default DictionaryEntryPage;

