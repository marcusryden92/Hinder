import { createContext, useContext, useState, useEffect } from "react";

import useSetAllUsers from "../hooks/useSetAllUsers";
import useNavigateTo from "../hooks/useNavigateTo";

export const AuthenticationContext = createContext({
  handleLogIn: () => {},
  handleLogOut: () => {},
});

export const AuthenticationProvider = ({ children }) => {
  const { allUsers, setNewUser, setAllUsers } = useSetAllUsers();
  const { goTo } = useNavigateTo();

  function handleLogIn(username, password) {
    const userFound = allUsers.find((userObj) => {
      return userObj.username === username;
    });

    if (userFound) {
      if (userFound.password === password) {
        setNewUser(userFound);
        return true;
      } else {
        return false;
      }
    } else {
      console.log("No user found");
    }
  }

  const handleLogOut = () => {
    setNewUser(null);
    goTo("/");
  };

  const value = {
    allUsers,
    handleLogIn,
    handleLogOut,
    setAllUsers,
  };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthenticationContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthenticationProvider");
  }

  return context;
};
