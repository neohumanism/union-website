import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Card1 = ({ title, content, image, alignment }) => {
  return (
    <Card sx={{backgroundColor: 'inherit', color:"white", height:"100%",/*border: "1px white solid",*/ borderRadius: 0}}>
      <CardContent sx={{padding:0}}>
        {image && (
        <CardMedia
            component="img"
            height="150"
            image={image}
            alt={`${image} Image`}
        />
        )}
        <Typography></Typography>
        <Typography variant="h5" sx={{fontFamily:"initial", paddingBottom:"4px",paddingTop:"3px"}} align={alignment ? 'center' : 'left'}>{title}</Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default Card1;
