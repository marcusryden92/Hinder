import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

export const AuthenticationContext = createContext({
  user: null,
  setUser: () => {},
  allUsers: null,
  setAllUsers: () => {},
  handleLogIn: () => {},
  handleLogOut: () => {},
});

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [allUsers, setAllUsers] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(allUsers);
  }, [allUsers]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      setAllUsers(users);
    }
  }, []);

  function handleLogIn(username, password) {
    const userFound = allUsers.find((userObj) => {
      return userObj.username === username;
    });

    if (userFound) {
      if (userFound.password === password) {
        setUser(userFound);
        return true;
      } else {
        return false;
      }
    } else {
      console.log("No user found");
    }
  }

  const handleLogOut = () => {
    setUser(null);
    navigate("/");
  };

  const value = {
    user,
    setUser,
    allUsers,
    setAllUsers,
    handleLogIn,
    handleLogOut,
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
