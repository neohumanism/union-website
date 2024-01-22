import React, { createContext, useContext, useState } from 'react';

const DictContext = createContext();

export const DictContextProvider = ({ children }) => {
  const [textInputValue, setTextInputValue] = useState("");

  const updateTextInputValue = (value) => {
    setTextInputValue(value);
  };

  return (
    <DictContext.Provider value={{ textInputValue, updateTextInputValue }}>
      {children}
    </DictContext.Provider>
  );
};

export const useDictContext = () => {
  return useContext(DictContext);
};
