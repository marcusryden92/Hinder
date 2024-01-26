import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../context/context";

export default function Header() {
  return (
    <div
      className={`bg-gray-500 p-2 h-14 hover:bg-blue-500 transition ease-in-out duration-500`}
    >
      <div></div>
    </div>
  );
}
