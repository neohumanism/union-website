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

const Desc = styled(Typography)`
    padding: 14px; 
    padding-top: 8px;
    font-size: 1.1rem;
    color:white;
    background-color:black;
`;

const Card1 = styled(Card)`
    text-align: center;
    border: 1px solid gray;
    border-radius: 0;
    margin-bottom: 40px; 
    background-color: black;
    padding:16px;
`;

const StackCard = ({title, desc}) => {
    return (
        <Card1>
        <Title variant="h3">{title}</Title>
        <Desc variant="body1">
          {desc}
        </Desc>
      </Card1>
    );
};

export default StackCard;