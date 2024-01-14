import React from 'react';
import Link from 'next/link';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const LinkCard = ({ title, content, image, link }) => {
  const cardStyle = {
    transition: 'box-shadow 0.3s',
    backgroundColor:"black",
    height:"100%",
    //borderRadius: 0,
    color:"white",
    '&:hover': {
      boxShadow: '0px 4px 8px rgba(200, 200, 200, 0.5)',
    },
  };

  return (
    <Link href={link} passHref>
      <Card sx={cardStyle}>
        {image && (
        <CardMedia
            component="img"
            height="150"
            image={image}
            alt={`${image} Image`}
        />
        )}
      <CardContent sx={{padding:"6px"}}>  
        <Typography variant="h5" sx={{paddingBottom:"4px"}} align={"left"}>{title}</Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
      </Card>
    </Link>
  );
};

export default LinkCard;
