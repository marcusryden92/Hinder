import { createContext, useState, useEffect, useContext } from "react";

import useSetUsers from "../hooks/useSetUsers";
import useUseCamera from "../hooks/useUseCamera";
import useSetCarousel from "../hooks/useSetCarousel";

export const ContextProvider = createContext(null);

export const Context = ({ children }) => {
  const { allUsers, loggedInUser, setLoggedInUser, setNewUser } = useSetUsers();

  const { userImage, saveImage } = useUseCamera();
  const [activeUser, setActiveUser] = useState(null);
  const { carouselImages, setCarouselImages, removeCarouselImage } =
    useSetCarousel();

  useEffect(() => {
    if (loggedInUser) {
      const users = JSON.parse(localStorage.getItem("users"));
      const withoutLoggedInUser = users.filter(
        (u) => u?.username !== loggedInUser?.username
      );
      setCarouselImages(withoutLoggedInUser);
    }
  }, [loggedInUser]);

  const value = {
    allUsers,
    loggedInUser,
    setLoggedInUser,
    setNewUser,

    userImage,
    saveImage,
    activeUser,
    setActiveUser,
    carouselImages,
    setCarouselImages,
    removeCarouselImage,
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
