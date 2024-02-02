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
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-gradient-to-r from-indigo-300 to-purple-500">
        <div className=" flex flex-col justify-center">
          <Camera userImage={userImage} saveImage={saveImage} />
        </div>
        <div className=" flex flex-col justify-center">
          <SignUpForm userImage={userImage} />
        </div>
      </div>
    </>
  );
}
