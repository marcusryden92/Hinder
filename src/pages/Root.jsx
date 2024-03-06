import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import landingPageImage from "../assets/skyline-big.jpg";

export default function Root() {
  return (
    <div
      style={{
        backgroundImage: `url(${landingPageImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen w-screen flex flex-col justify-between items-center overflow-hidden"
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
