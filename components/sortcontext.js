import { createContext, useContext, useState } from 'react';

const SortContext = createContext();

// We will not rely on discretion in sorting, only strict categorization and tagging and etc.
// A definitive system for which will be figured out later.

export const SortContextProvider = ({ children }) => {
  const [state, setState] = useState({
    tags: null,
    text: "",
    //date: null,
    sortBy: null,
  });

  const updateText= (value) => {
    setState((prevState) => ({ ...prevState, text: value }));
  };

  const setSortBy = (value) => {
    setState((prevState) => ({ ...prevState, sortBy: value }));
  };

  const setTag = (value) => {
    setState((prevState) => ({ ...prevState, tags: value }));
  };

  const addTag = (value) => {
    setState((prevState) => ({ ...prevState, tags: [...prevState.tags, ...value] }));
  };

  const removeTag = (value) => {
    setState((prevState) => ({
      ...prevState,
      tags: prevState.tags.filter(tag => !value.includes(tag)),
    }));
  };

  const clearTags= () => {
    setState((prevState) => ({ ...prevState, tags: null }));
  };

  return (
    <SortContext.Provider value={{ ...state, updateText, setSortBy, setTag, addTag, removeTag, clearTags }}>
      {children}
    </SortContext.Provider>
  );
};

export const useSortContext = () => {
  return useContext(SortContext);
};
