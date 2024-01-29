import { createContext, useState } from "react";

export const ContextProvider = createContext({
  userImage: null,
  sveImage: () => {},
});

export const Context = ({ children }) => {
  const [userImage, setUserImage] = useState(null);

  const saveImage = (img) => {
    const imageSrc = img.current.getScreenshot();
    setUserImage(imageSrc);
  };

  const value = {
    userImage,
    saveImage,
  };

  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
};
