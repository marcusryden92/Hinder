import { createContext, useState, useEffect, useContext } from "react";
import { AuthenticationProvider } from "./AuthenticationContext";
import { useAuth } from "./AuthenticationContext";
export const ContextProvider = createContext({
  userImage: null,
  saveImage: () => {},
});

export const Context = ({ children }) => {
  const [userImage, setUserImage] = useState(null);
  const { allUsers } = useAuth();

  const saveImage = (img) => {
    const imageSrc = img.curreAnt.getScreenshot();
    setUserImage(imageSrc);
  };

  const value = {
    userImage,
    saveImage,
    allUsers,
    saveUser,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
