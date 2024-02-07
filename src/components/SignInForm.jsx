import loveImg from "../assets/love.png";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import { ContextProvider } from "../context/context";
import logo from "../assets/hinderlogo.png";

export default function SignInForm() {
  const { setLoggedInUser } = useContext(ContextProvider);
  const usernameBox = useRef();
  const passwordBox = useRef();
  const navigate = useNavigate();

  function handleLogIn(username, password) {
    const users = JSON.parse(localStorage.getItem("users"));
    const foundUserIndex = users.findIndex((u) => {
      return u.username === username;
    });

    if (
      users[foundUserIndex] &&
      users[foundUserIndex].username === username &&
      users[foundUserIndex].password === password
    ) {
      setLoggedInUser(users[foundUserIndex]);
      navigate("/mainpage");
      return true;
    } else {
      console.log("No user found");
    }
  }

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 text-black w-[100vw] h-[100vh] max-w-[100rem] max-h-[60rem]">
      <div className="hidden md:block overflow-hidden">
        <img className="h-[100%]" src={loveImg} alt="" />
      </div>
      <div className="flex flex-col justify-center">
        <form className="w-[70%] mx-auto bg-white p-8 px-8 rounded-lg text-center shadow-medium">
          <img src={logo}></img>
          <div className=" mt-10 flex flex-col py-2">
            <label>Username</label>
            <input
              className="rounded-lg bg-gray-200 mt-2 p-2 focus:text-white focus:border-violet-800 focus:bg-pink-500 focus:outline-none"
              type="text"
              ref={usernameBox}
            />
          </div>
          <div className=" flex flex-col py-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-gray-200 mt-2 p-2 focus:text-white focus:border-violet-800 focus:bg-pink-500 focus:outline-none"
              type="password"
              ref={passwordBox}
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
            onClick={() =>
              handleLogIn(usernameBox.current.value, passwordBox.current.value)
            }
            className="w-full my-5 py-2 bg-pink-500 max-w-[15rem] shadow-small text-white font-semibold rounded-lg hover:bg-[#ff6a7b] hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-[#660066] focus:ring-opacity-50 transition-all duration-300 ease-in-out"
          >
            SIGN IN
          </button>
          <p>
            No member?{" "}
            <Link to="/signup" className=" font-bold">
              Register!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
