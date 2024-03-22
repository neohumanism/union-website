import React from 'react';
import parseMetadata from './parsedata';
import Link from 'next/link';
import { Typography, Container } from '@mui/material';
import CardGrid from './cardgrid';
import Grid from '@mui/material/Grid';
import SortContainer from './sortcontainer';
import { useSortContext } from './sortcontext';

const ArticlesSpace = ({ data }) => {
    const sortInfo = useSortContext();
    const articles = data.reduce((result, article) => {
        const slug = article.path;
        const metadata = parseMetadata(article.content);
        const composite = metadata.title + " " + metadata.subtitle;
      
        if (
          sortInfo.text != null &&
          composite != null &&
          composite.toLowerCase().includes(sortInfo.text.toLowerCase())
        ) {
          if (metadata.thumbnail == "default") {
            metadata.thumbnail = "default.jpg";
          }
      
          result.push({
            slug,
            title: metadata.title,
            content: metadata.subtitle,
            thumbnail: metadata.thumbnail,
          });
        }
      
        return result;
      }, []);
      
    return (
    <Grid container>
    <Grid item xs={2}>
    <SortContainer/>
    </Grid>
    <Grid item xs={10} style={{ maxHeight: '85vh', overflow: 'auto' }}>
    <CardGrid data={articles} divider={true}/>
    </Grid>
    </Grid>
    );
};


export default ArticlesSpace;
