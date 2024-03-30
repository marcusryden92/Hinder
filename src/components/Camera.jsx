import { useRef } from "react";
import Webcam from "react-webcam";
import logo from "../assets/hinderlogo.png";

export default function Camera({ saveImage, userImage }) {
  const webcamRef = useRef(null);

  return (
    <div className="flex flex-col justify-center items-center relative">
      <h1 className="text-[2rem] text-[#FF6A7B]">HINDER</h1>
      <div className="flex flex-col items-center mt-2">
        <div className="relative">
          <Webcam
            className="rounded-[1rem] bg-pink-100 p-6 border-2 rounded-medium shadow-webcam"
            height={300}
            width={300}
            audio={false}
            ref={webcamRef}
          ></Webcam>
          <img
            className={`w-16 absolute top-[1.6rem] right-[1.6rem] rounded-sm ${
              userImage ? "border-b-2 border-l-2 border-pink-100 " : "border-0"
            }`}
            src={userImage}
          />
        </div>

        <button
          type="button"
          className="w-full my-5 py-2 bg-pink-500 max-w-[15rem] shadow-small text-white font-semibold rounded-lg hover:bg-[#ff6a7b] hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-[#660066] focus:ring-opacity-50 transition-all duration-300 ease-in-out"
          onClick={() => saveImage(webcamRef)}
        >
          Capture
        </button>
      </div>
    </div>
  );
}
