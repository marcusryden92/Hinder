import { createContext, useContext } from "react";
import useSetUsers from "../hooks/useSetUsers";
export const ContextProvider = createContext(null);

export const Context = ({ children }) => {
  const { loggedInUser, setLoggedInUser, setNewUser } = useSetUsers();

  const value = {
    loggedInUser,
    setLoggedInUser,
    setNewUser,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error("useAuth must be used within an AuthenticationProvider");
  }
  return context;
};
