import { createContext, useState } from "react";

export const ContextProvider = createContext({
  example: null,
  exampleFunction: () => {},
});

export const Context = ({ children }) => {
  const [user, setUser] = useState({});

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
