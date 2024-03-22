import React from 'react';
import Link from 'next/link';
import { Typography, Container } from '@mui/material';
import { SortContextProvider } from '../components/sortcontext';
import ArticlesSpace from '../components/articlesspace';

import { getDirectory, getFiles } from '../components/getstatics';  
//make it so that when articles do not have a publish date, they are considered unfinished

const ArticlesPage = ({data}) => {
  //will want some sort of compression for images probably
  //add an advanced search system that goes through the text of the articles later

  //take the specifications from sortcontainer first, and use those to filter out the unwanted articles
  //then give that data to cardgrid
  return (
    <Container>
      <br/>
      <SortContextProvider>
      <ArticlesSpace data={data}/>
      </SortContextProvider>
      <br/>

      <h1>Notes</h1>
      <br/>
      <p>Media here solely reflect their respective authors' opinions.</p>
      <br/>
      <p>If you want to submit an article, just commit the relevant files to the github or send them on the contact page.</p>
      <br/>
      <p style={{color:"lightblue", textDecoration:"underline"}}><Link href="/articleguide">Guide to how article markdown works</Link></p>
      <br/><br/>
    </Container>
  );
};

export async function getStaticProps() {
  const { paths } = await getDirectory("articles", "md");
  return getFiles("articles", paths, "md");
};
export default ArticlesPage;
