import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../context/context";

export default function Header() {
  const { number } = useContext(ContextProvider);

  return (
    <div className={`bg-pink-500`}>
      <p>Header</p>
      <div>{number}</div>
    </div>
  );
}
