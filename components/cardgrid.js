import React from 'react';
import Grid from '@mui/material/Grid';
import Card1 from './card1';

const CardGrid = ({data, dimension}) => {
  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <Grid item xs={dimension} key={index}>
          <Card1 title={item.title} content={item.content} image={item.image} alignment={item.alignment} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
