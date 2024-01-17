import React from 'react';
import fs from 'fs';
import path from 'path';
import parseMetadata from '../components/parseMetadata';
import Link from 'next/link';
import { Typography, Container } from '@mui/material';
import CardGrid from '../components/cardgrid';

const news = [ //this is just temporary until we set up database
  {title: 'Is Spaceshipman an ally?', content: 'Spaceshipman has just unveiled his latest genius idea of new roads under our current roads. Investors say this...', image: "lol.jpg"},
  {title: 'Is the \"libertarian left\" a grift?', content: 'You can\'t enforce equality without the equivalent of a police to do it, so how do left libertarians suggest it...', image: "lol.jpg"},
  {title: 'Is a unified ideology necessary?', content: 'The Right is currently disjointed and without a clear direction, and has repeatedly been losing ground to...', image: "lol.jpg"},
  {title: 'Does Dreamland belong to Kirby?', content: 'Kirby says his ancestors lived there 2000 years ago. On the other hand, waddle dees have since moved in...', image: 'lol.jpg'},
  {title: 'Was freedom of speech a mistake?', content: 'Many right-wing proponents have stated freedom of speech was what allowed the woke ideology to...', image: "lol.jpg"},
  {title: 'Will China go to war over Taiwan?', content: 'The PRC has in recent times increased its military posturing against the ROC (Taiwan), so it would...', image: "lol.jpg"},
];

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
      <h2>UNFINISHED ARTICLES: (for the sake of preview)</h2>
      <br/>
      <CardGrid data={articles}/>
      <br/>
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
    if (metadata.thumbnail == "default") {
      metadata.thumbnail = "default.jpg";
    }
    //metadata.desc = first 200 chars of content without reading the whole thing

    return {
      slug,
      title: metadata.title || slug,
      thumbnail: metadata.thumbnail,
    };
  });

  return {
    props: {
      articles,
    },
  };
};

export default ArticleNavigation;
