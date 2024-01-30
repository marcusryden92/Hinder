import { useState } from "react";

const useGetUserImage = () => {
  const [userImage, setUserImage] = useState(null);

  const saveImage = (img) => {
    const imageSrc = img.current.getScreenshot();
    setUserImage(imageSrc);
  };

  return { userImage, saveImage };
};

export default useGetUserImage;
