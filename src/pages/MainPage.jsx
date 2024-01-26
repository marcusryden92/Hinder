import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../context/context";
import { Link } from "react-router-dom";

export default function MainPage() {
  const { add } = useContext(ContextProvider);

  return (
    <>
      <div className="bg-orange-600">
        <p>MainPage</p>
        <button onClick={add} className={`border-2 border-black p-2 bg-white`}>
          Click to use context
        </button>
      </div>
    </>
  );
}
