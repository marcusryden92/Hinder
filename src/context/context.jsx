import { createContext, useState, useEffect } from "react";

import useSetUsers from "../hooks/useSetUsers";

export const ContextProvider = createContext({
  userImage: null,
  saveImage: () => {},
  allUsers: null,
  loggedInUser: null,
  handleImageClick: () => {},
  selectedUser: null,
  setSelectedUser: () => {},
  handleRemoveImage: () => {},
  carouselUsers: [],
  setCarouselUsers: () => {},
});

export const Context = ({ children }) => {
  const { allUsers, loggedInUser } = useSetUsers();
  const [userImage, setUserImage] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [carouselUsers, setCarouselUsers] = useState([]);

  const handleRemoveImage = (selectedUser) => {
    const newUsers = carouselUsers.filter(
      (user) => user.username !== selectedUser.username
    );
    setTimeout(() => {
      setSelectedUser(newUsers[Math.floor(Math.random() * newUsers.length)]);
    }, 200);
    setCarouselUsers(newUsers);
  };

  const handleImageClick = (user) => {
    setSelectedUser(user);
  };

  const saveImage = (img) => {
    const imageSrc = img.current.getScreenshot();
    setUserImage(imageSrc);
  };

  const value = {
    userImage,
    saveImage,
    allUsers,
    handleImageClick,
    selectedUser,
    setSelectedUser,
    handleRemoveImage,
    carouselUsers,
    setCarouselUsers,
    loggedInUser,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
