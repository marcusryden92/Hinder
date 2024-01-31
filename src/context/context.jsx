import { createContext, useState, useEffect, useContext } from "react";
import { AuthenticationProvider } from "./AuthenticationContext";
import { useAuth } from "./AuthenticationContext";
export const ContextProvider = createContext({
  userImage: null,
  saveImage: () => {},
  handleImageClick: () => {},
  selectedUser: [],
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
