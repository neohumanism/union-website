import React from 'react';
import Grid from '@mui/material/Grid';
import LinkCard from './linkcard';

const CardGrid = ({data}) => {
  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <LinkCard title={item.title} content={item.content} image={item.image} link={"lol"}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
