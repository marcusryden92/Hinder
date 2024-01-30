import { createContext, useState, useEffect } from "react";

export const ContextProvider = createContext({
  userImage: null,
  allUsers: null,
  targetUser: null,
  saveImage: () => {},
  saveCurrentUser: () => {},
  hanfleCarouselClick: () => {},
});

export const Context = ({ children }) => {
  const [userImage, setUserImage] = useState(null);
  const [allUsers, setAllUsers] = useState(null);
  const [user, setUser] = useState(null);
  const [targetUser, setTargetUser] = useState();

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

  const handleCarouselClick = (user) => {
    setTargetUser(user);
  };

  const value = {
    userImage,
    allUsers,
    user,
    targetUser,
    handleCarouselClick,
    saveImage,
    saveCurrentUser,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
