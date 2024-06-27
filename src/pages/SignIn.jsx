import React from "react";
import SignInForm from "../components/SignInForm";
import landingPageImage from "../assets/skyline.jpg";

export default function SignIn() {
  return (
    <div
      style={{
        backgroundImage: `url(${landingPageImage})`,
        width: "150vw",
        height: "100vh",
        backgroundPosition: "bottom",
      }}
      className="bg-center bg-cover overflow-hidden flex justify-center items-center"
    >
      <SignInForm />
    </div>
  );
}
