import { createContext, useState, useEffect } from "react";

import useSetUsers from "../hooks/useSetUsers";

export const ContextProvider = createContext({
  allUsers: [],
  setAllUsers: () => {},
  loggedInUser: null,
  setLoggedInUser: () => {},
  setNewUser: () => {},
  setupTestUsers: () => {},
  userImage: null,
  setUserImage: () => {},
  selectedUser: null,
  setSelectedUser: () => {},
  handleImageClick: () => {},
  saveImage: () => {},
  carouselUsers: [],
  setCarouselUsers: () => {},
  handleRemoveImage: () => {},
});

export const Context = ({ children }) => {
  const {
    allUsers,
    setAllUsers,
    loggedInUser,
    setLoggedInUser,
    setNewUser,
    setupTestUsers,
  } = useSetUsers();

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
    allUsers,
    setAllUsers,
    loggedInUser,
    setLoggedInUser,
    setNewUser,
    setupTestUsers,
    userImage,
    setUserImage,
    selectedUser,
    setSelectedUser,
    handleImageClick,
    saveImage,
    carouselUsers,
    setCarouselUsers,
    handleRemoveImage,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
