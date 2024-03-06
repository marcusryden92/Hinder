import SignUpForm from "../components/SignUpForm";
import Camera from "../components/Camera";
import { useState } from "react";
import landingPageImage from "../assets/skyline.jpg"; // Import the image

export default function SignUp() {
  const [userImage, setUserImage] = useState(null);

  const saveImage = (img) => {
    const imageSrc = img.current.getScreenshot();
    setUserImage(imageSrc);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${landingPageImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-screen h-screen flex justify-center items-center"
      >
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center h-[100vh] w-[100vw] md:max-w-[80rem] max-h-[50rem] ">
            <div className="flex justify-center items-center">
              <Camera userImage={userImage} saveImage={saveImage} />
            </div>
            <div className="flex justify-center items-center">
              <SignUpForm userImage={userImage} saveImage={saveImage} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
