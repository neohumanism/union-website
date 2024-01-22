import React from 'react';
import Link from 'next/link';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const LinkCard = ({ title, content, image, link }) => {
  const cardStyle = {
    transition: 'box-shadow 0.2s',
    backgroundColor:"black",
    height:"100%",
    border: "1px solid gray",
    borderRadius: "0",
    color:"white",
    '&:hover': {
      boxShadow: '0px 0px 40px rgba(200, 200, 200, 0.6)',
    },
  };

  return (
    <Link href={link} passHref>
      <Card sx={cardStyle}>
        {image && (
          <CardMedia
            component="img"
            height="180"
            image={image}
            alt={`${image} Image`}
            sx={{borderBottom:"1px solid gray"}}
          />
        )}
      <CardContent sx={{padding:"16px"}}>  
        <Typography variant="h5" sx={{paddingBottom:"4px"}} align={"left"}>{title}</Typography> 
        {/*use better fonts for this*/}
        <Typography variant="body2">{content}</Typography>
      </CardContent>
      </Card>
    </Link>
  );
};

export default LinkCard;
