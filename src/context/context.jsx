import { createContext, useState, useContext } from "react";

// Creating the context and assign it to a variable
export const ContextProvider = createContext({
  example: null,
  exampleFunction: () => {},
});

// example function in the context
export const Context = ({ children }) => {
  const [number, setNumber] = useState(0);

  const add = () => {
    setNumber(number + 1);
  };
  const value = {
    number,
    add,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
