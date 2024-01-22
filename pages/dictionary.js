import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import Link from 'next/link';
import { useDictContext, DictContextProvider } from '../components/dictcontext';
import { getDirectory, getFiles } from '../components/getstatics';

/*
tagcontainer - media
searchbar, input words and a context, modify context
dictcontext
mediacontext
articledisplay, listen for context changes and display differently, use cardgrid
dictdisplay, listen and display too, make a new card list display for this
*/



export const DictDisplay = ({data}) => {
  const { textInputValue } = useDictContext();
  const words = data.map((word) => { //we add decoding here and etc., thereby justifying two loops sort of
    const slug = word.path;
    const content = word.content;
    return {
      slug,
      content,
    };
  });
  const filteredWords = words.filter(word => //not sure if this solution scales well, but it works for now
    word.slug.toLowerCase().includes(textInputValue.toLowerCase())
  );
  return (
    <ul>
      {filteredWords.map((word, index) => ( //need to make better system for stuff around here in general
        <li key={index}>{word.content}</li>
      ))}
    </ul>
  );
};

export const SearchBar = ({context}) => { //eventually split this into a separate file
  const { textInputValue, updateTextInputValue } = context;
 
  const handleChange = (event) => {
    const value = event.target.value;
    updateTextInputValue(value);
  };

  return ( //use mui eventually maybe
    <>
      <input type="text" value={textInputValue} onChange={handleChange} />
    </>
  );
};

export const DictPagery = ({data}) => {
  const context = useDictContext();

  return (
    <>
    <SearchBar context={context}/>
    <DictDisplay data={data}/>
    </>
  );
};


const DictionaryPage = ({data}) => {
  console.log(data);
    return (
        <Container sx={{ marginTop: 4, marginBottom: 4}}>
          <DictContextProvider>
            <DictPagery data={data}/> {/*is this drilling fine?*/}
          </DictContextProvider>
            {/*<SearchComponent words={["lol","hi"]}/>*/}
            <Typography>this is to one day contain a navigable database of all terms</Typography>
            <Typography>one day</Typography>
        </Container>
    );
};

export async function getStaticProps() {
  const { paths } = await getDirectory("dictionary", "md");
  console.log(paths);
  return getFiles("dictionary", paths, "md");
};

export default DictionaryPage;
