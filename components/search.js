import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';

const SearchBar = ({context}) => {
  const { text, updateText } = context;
 
  const handleChange = (event) => {
    const value = event.target.value;
    updateText(value);
  };

  return ( //use mui eventually maybe
    <>
      <input type="text" value={text} onChange={handleChange} />
    </>
  );
};

export default SearchBar;