import { createContext, useState } from "react";

export const ContextProvider = createContext({
  example: null,
  exampleFunction: () => {},
});

export const Context = ({ children }) => {
  const [user, setUser] = useState({});

  const value = {
    user,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
