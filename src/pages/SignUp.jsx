import SignUpForm from "../components/SignUpForm";
import Camera from "../components/Camera";
import { useState } from "react";

export default function SignUp() {
  const [userImage, setUserImage] = useState(null);

  const saveImage = (img) => {
    const imageSrc = img.current.getScreenshot();
    setUserImage(imageSrc);
  };

  return (
    <div className="flex h-full w-[100vw] bg-white max-w-[85rem] max-h-[60rem]">
      <div className="flex flex-1 justify-center items-center w-[100%]">
        <Camera userImage={userImage} saveImage={saveImage} />
      </div>
      <div className="flex flex-1 justify-center items-center">
        <SignUpForm userImage={userImage} saveImage={saveImage} />
      </div>
    </div>
  );
}
