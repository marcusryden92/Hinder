import { createContext, useState, useEffect } from "react";
import { useAuth } from "./AuthenticationContext";

export const ContextProvider = createContext({
  userImage: null,
  saveImage: () => {},
  allUsers: null,
  handleImageClick: () => {},
  selectedUser: null,
  setSelectedUser: () => {},
  handleRemoveImage: () => {},
  carouselUsers: [],
});

export const Context = ({ children }) => {
  const [userImage, setUserImage] = useState(null);
  const { allUsers } = useAuth();
  const [selectedUser, setSelectedUser] = useState(null);
  const [carouselUsers, setCarouselUsers] = useState([]);

  useEffect(() => {
    setCarouselUsers(allUsers);
  }, [allUsers]);

  const handleRemoveImage = (selectedUser) => {
    const newUsers = carouselUsers.filter(
      (user) => user.username !== selectedUser.username
    );
    setCarouselUsers(newUsers);
    setTimeout(() => {
      setSelectedUser(
        carouselUsers[Math.floor(Math.random() * carouselUsers.length)]
      );
    }, 600);
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
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
