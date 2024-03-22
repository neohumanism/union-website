import React from 'react';
import { Typography, Card } from '@mui/material';
import styled from '@emotion/styled';

const Title = styled(Typography)`
    padding: 10px;
    text-align: center;
    color:white;
    font-family:Cormorant;
    text-transform: uppercase;
    background-color:black;
`;

const Desc = styled(Typography)({
    padding: "14px",
    paddingTop: "8px",
    fontSize: "1rem",
    color:"white",
    backgroundColor:"black",
    '& a': {
        color: 'lightblue',
        textDecoration: 'underline',
    },

});

const Card1 = styled(Card)`
    //text-align: center;
    border: 1px solid gray;
    border-radius: 0;
    margin-bottom: 40px; 
    background-color: black;
    padding:16px;
    margin-left:auto;
    margin-right:auto;
    @media (min-width: 720px) {
        width: 85%;
        padding-left:5%;
        padding-right:5%;
    }
`;

const StackCard = ({title, desc}) => {
    return (
        <Card1>
        <Title variant="h3">{title}</Title>
        <Desc variant="body1" dangerouslySetInnerHTML={{ __html: desc /*i'm sure this is fine*/ }}/>
        {/*use he instead?*/}
      </Card1>
    );
};

export default StackCard;