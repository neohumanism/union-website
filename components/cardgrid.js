import React from 'react';
import Grid from '@mui/material/Grid';
import LinkCard from './linkcard';

const CardGrid = ({data, divider}) => {
  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <LinkCard title={item.title} content={item.content} image={item.thumbnail} link={"articles/"+item.slug} divider={divider}/>
          {/*we must have a method of getting the first 200 characters of an article as preview content*/}
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
