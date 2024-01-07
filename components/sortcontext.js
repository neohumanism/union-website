import { createContext, useContext, useState } from 'react';

const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const setSortData = (input) => {
    setData(input);
  };

  const addSortData = (input) => {
    setData(...input);
  };

  const removeSortData = (input) => {
    setData(input); //idk how tf to do
  };

  const clearSortData = () => {
    setData(null);
  };

  return (
    <SortContext.Provider>
      {children}
    </SortContext.Provider>
  );
};

export const useSortContext= () => {
  return useContext(SortContext);
};