import React from 'react';
import parseMetadata from '../components/parsemetadata';
import Link from 'next/link';
import { Typography, Container } from '@mui/material';
import CardGrid from '../components/cardgrid';
import { getDirectory, getFiles } from '../components/getstatics';

const ArticlesPage = ({ data }) => {
  const articles = data.map((article) => {
    const slug = article.path;
    const metadata = parseMetadata(article.content);
    if (metadata.thumbnail == "default") {
      metadata.thumbnail = "default.jpg";
    }
    //metadata.desc = first 200 chars of content without reading the whole thing

    return {
      slug,
      title: metadata.title,
      thumbnail: metadata.thumbnail,
    };
  });

  //add tag, sort, and search system
  //will want some sort of compression for images probably
  return (
    <Container>
      <h1>Article Navigation</h1>
      <p>(I will add navigation here later)</p>
      <br/>
      <p>Note media here is not part of the canon, and solely reflect their respective authors' opinions.</p>
      <br/>
      <p>If you want to submit an article, just commit the relevant files to the github or send them on the contact page.</p>
      <br/>
      <p style={{color:"lightblue", textDecoration:"underline"}}><Link href="/articleguide">Guide to how article markdown works</Link></p>
      <br/><br/>
      <h2>UNFINISHED ARTICLES: (for the sake of preview)</h2>
      <br/>
      <CardGrid data={articles}/>
      <br/>
    </Container>
  );
};

export async function getStaticProps() {
  const { paths } = await getDirectory("articles", "md");
  return getFiles("articles", paths, "md");
};

export default ArticlesPage;
