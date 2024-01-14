import React from 'react';
import fs from 'fs';
import path from 'path';
import parseMetadata from '../components/parseMetadata';
import Link from 'next/link';
import { Typography, Container } from '@mui/material';

const ArticleNavigation = ({ articles }) => {
  return (
    <Container>
      <h1>Article Navigation</h1>
      <p>(I will make this not look like garbage later when we have more stuff here. Later, because that requires more than 3 brain cells, and I only have 2 active at the moment.)</p>
      <br/>
      <p>If you want to submit an article, just commit the relevant files to the github or send them to me.</p>
      <br/>
      <p style={{color:"lightblue", textDecoration:"underline"}}><Link href="/articleguide">Guide to how article markdown works</Link></p>
      <br/><br/>
      <h2>UNIFINISHED ARTICLE: (for the sake of preview)</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={article.slug} style={{fontSize:"20px",padding:"5px"}}>
            Random article {index+1}: <a href={`/articles/${article.slug}`} style={{textDecoration:"underline", color:"lightblue"}}>{article.title}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export async function getStaticProps() { //make into one component to handle these, and then use in index.js
  const articlesDirectory = path.join(process.cwd(), 'articles');
  const fileNames = fs.readdirSync(articlesDirectory);

  const articles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const content = fs.readFileSync(path.join(articlesDirectory, fileName), 'utf-8');
    const metadata = parseMetadata(content);

    return {
      slug,
      title: metadata.title || slug,
    };
  });

  return {
    props: {
      articles,
    },
  };
};

export default ArticleNavigation;
