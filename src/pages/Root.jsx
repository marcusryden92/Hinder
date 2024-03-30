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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${landingPageImage})`,
      }}
      className="h-screen w-screen flex flex-col justify-between items-center overflow-hidden"
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
