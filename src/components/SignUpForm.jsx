import { Link, useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import { ContextProvider } from "../context/context";

export default function SignUpForm({ userImage, saveImage }) {
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
      liked: [],
      disliked: [],
    };

    setNewUser(newUser);
  };

  return (
    <div className="w-[100%] h-screen bg-white p-[4rem]">
      <form className=" w-[100%] rounded-lg text-center">
        <div className=" flex flex-col items-center py-2 text-black">
          <label>Name</label>
          <input
            className=" w-[80%] rounded-lg bg-gray-200 mt-2 p-2 focus:text-white focus:border-violet-800 focus:bg-pink-500 focus:outline-none"
            type="text"
            ref={name}
          />
        </div>
        <div className="items-center  flex flex-col py-2 text-black">
          <label>Username</label>
          <input
            className=" w-[80%] rounded-lg bg-gray-200 mt-2 p-2 focus:text-white focus:border-violet-800 focus:bg-pink-500 focus:outline-none"
            type="text"
            ref={username}
          />
        </div>
        <div className="items-center flex flex-col py-2 text-black">
          <label>Password</label>
          <input
            className=" w-[80%]  p-2 rounded-lg bg-gray-200 mt-2 focus:text-white  focus:border-violet-800 focus:bg-pink-500 focus:outline-none"
            type="password"
            ref={password}
          />
        </div>
        <div className="items-center flex flex-col py-2 text-black">
          <label>Description</label>
          <textarea
            className=" w-[80%]  resize-none rounded-lg bg-gray-200 mt-2 p-2 focus:border-violet-800 focus:bg-purple-200 focus:outline-none"
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
          <Link to="#">
            <p>Forgot password</p>
          </Link>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            validateRegistration();
          }}
          className="w-full my-5 py-2 bg-pink-500 max-w-[15rem] shadow-small text-white font-semibold rounded-lg hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-[#660066] focus:ring-opacity-50 transition-all duration-300 ease-in-out"
        >
          SIGN UP
        </button>
        <p>
          Already member?{" "}
          <Link to="/" className=" font-bold">
            Click here!
          </Link>
        </p>
      </form>
    </div>
  );
}
