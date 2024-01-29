import React, { useState, useRef, useEffect, useCallback } from "react";
import Webcam from "react-webcam";

export default function Camera() {
  const webcamRef = useRef(null);
  const [userImage, setUserImage] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUserImage(imageSrc);
  }, [userImage]);

  return (
    <div className="flex flex-row w-[500px] h-[400px] rounded-[2rem] p-6 m-10 bg-white shadow-md shadow-gray-500">
      <div>
        <Webcam
          className="rounded-[1rem]"
          height={300}
          width={300}
          audio={false}
          ref={webcamRef}
        ></Webcam>
        <button
          className="bg-rose-600 text-white px-5 py-2 my-5 rounded-xl"
          onClick={capture}
        >
          Capture
        </button>
      </div>
      <div className="flex flex-col-reverse ">
        {
          /*userInfo.map((user, index) => (
          <div key={index}>
            <p>{user.userName}</p>
            <img src={user.image} className="w-20 h-20" alt="" />
          </div>
        ))*/ <img className="rounded-[1.5rem] w-48 " src={userImage} />
        }
      </div>
    </div>
  );
}
