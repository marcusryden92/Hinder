import { Link, useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import { ContextProvider } from "../context/context";

export default function SignUpForm({ userImage }) {
  const navigate = useNavigate();
  const { setNewUser } = useContext(ContextProvider);
  const name = useRef();
  const description = useRef();
  const password = useRef();
  const username = useRef();

  const validateRegistration = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const usernameIsTaken = users.find(
      (user) => user?.username === username.current.value
    );

    if (
      username.current.value &&
      name.current.value &&
      description.current.value &&
      password.current.value &&
      userImage &&
      !usernameIsTaken
    ) {
      handleRegister();
      navigate("/mainpage");
    } else {
      alert("Please fill in all fields or make sure the username isn't taken");
    }
  };

  const handleRegister = () => {
    const newUser = {
      name: name.current.value,
      username: username.current.value,
      password: password.current.value,
      description: description.current.value,
      image: userImage,
      likes: [],
    };

    setNewUser(newUser);
  };

  return (
    <form className=" max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg  text-center">
      <h2 className="text-4xl dark:text-black mb-6 font-bold">REGISTER</h2>
      <div className=" flex flex-col py-2 text-black">
        <label>Name</label>
        <input
          className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-violet-800 focus:bg-purple-200 focus:outline-none"
          type="text"
          ref={name}
        />
      </div>
      <div className=" flex flex-col py-2 text-black">
        <label>Username</label>
        <input
          className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-violet-800 focus:bg-purple-200 focus:outline-none"
          type="text"
          ref={username}
        />
      </div>
      <div className=" flex flex-col py-2 text-black">
        <label>Password</label>
        <input
          className="p-2 rounded-lg bg-gray-200 mt-2  focus:border-violet-800 focus:bg-purple-200 focus:outline-none"
          type="password"
          ref={password}
        />
      </div>
      <div className=" flex flex-col py-2 text-black">
        <label>Description</label>
        <textarea
          className=" resize-none rounded-lg bg-gray-200 mt-2 p-2 focus:border-violet-800 focus:bg-purple-200 focus:outline-none"
          placeholder="Some words to describe yourself ..."
          type="text"
          ref={description}
        />
      </div>
      <div className="flex justify-between py-2">
        <p className="flex items-center">
          <input className="mr-2" type="checkbox" />
          Remember me
        </p>
        <p>Forgot password</p>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          validateRegistration();
        }}
        className="hover:bg-pink-400 w-full my-5 py-2 bg-pink-500 shadow-lg shadow-pink-500/50 hover:shadow-pink-500/40 text-white font-semibold rounded-lg"
      >
        SIGN UP
      </button>
      <p>
        Already member? <Link to="/">Click here!</Link>
      </p>
    </form>
  );
}
