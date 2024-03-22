import React, { createContext, useContext, useState } from 'react';

const DictContext = createContext();

export const DictContextProvider = ({ children }) => {
  const [text, setTextInputValue] = useState("");

  const updateText = (value) => {
    setTextInputValue(value);
  };

  return (
    <DictContext.Provider value={{ text, updateText }}>
      {children}
    </DictContext.Provider>
  );
};

export const useDictContext = () => {
  return useContext(DictContext);
};
