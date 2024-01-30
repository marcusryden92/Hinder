import { createContext, useState, useEffect } from "react";

export const ContextProvider = createContext({
  userImage: null,
  saveImage: () => {},
  saveCurrentUser: () => {},
});

export const Context = ({ children }) => {
  const [userImage, setUserImage] = useState(null);
  const [allUsers, setAllUsers] = useState(null);
  const [user, setUser] = useState(null);

  const saveCurrentUser = (user) => {
    setUser(user);
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    setAllUsers(users);
  }, [user]);

  const saveImage = (img) => {
    const imageSrc = img.current.getScreenshot();
    setUserImage(imageSrc);
  };

  const value = {
    userImage,
    saveImage,
    saveCurrentUser,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
