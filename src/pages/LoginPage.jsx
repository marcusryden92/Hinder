import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvider } from "../context/context";

export default function LoginPage() {
  const { add } = useContext(ContextProvider);

  return (
    <div className="bg-purple-600">
      <p>LoginPage</p>
      <button onClick={add} className={`border-2 border-black p-2 bg-white`}>
        Click to use context
      </button>
      <Link to="/MainPage">
        <button className={`border-2 border-black p-2 bg-white`}>
          Click for Main Page
        </button>
      </Link>
    </div>
  );
}
