import React, {useState} from 'react';
import Container from '@mui/material/Container';
import SearchBar from './search';
import { useSortContext } from '../components/sortcontext';

const SortContainer = () => {
  const context = useSortContext();

  return (
    <Container sx={{backgroundColor: "#111111",color: "white",height:"97.5%",padding:"20px"}}>
        <SearchBar context={context}/>
    </Container>
  );
};

export default SortContainer;
