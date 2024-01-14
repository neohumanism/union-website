import React from 'react';
import { Paper, Typography, Divider } from '@mui/material';
import styled from '@emotion/styled';

const Typo1 = styled(Typography)`
    color:white
`;

const MetaBar = ({ metadata }) => {
  return (
    <>
    <Paper elevation={3} style={{ marginTop: '69px', backgroundColor: "black"}}>
    <Divider sx={{backgroundColor:"white",marginBottom:"9px"}}></Divider>

      <Typo1 variant="subtitle1">
        Author: {metadata.author}
      </Typo1>
      <Typo1 variant="subtitle1">
        Published: {metadata.published}
      </Typo1>
      <Typo1 variant="subtitle1">
        Last revised: {metadata.revised}
      </Typo1>
    </Paper>
    </>
  );
};

export default MetaBar;
