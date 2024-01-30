import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/login.jpg";
import { useRef } from "react";
import Camera from "../components/Camera";
import { useContext } from "react";
import { ContextProvider } from "../context/context";

export default function SignUp() {
  const navigate = useNavigate();
  const { userImage } = useContext(ContextProvider);
  const name = useRef();
  const description = useRef();
  const password = useRef();

  const goToHomePage = () => {
    navigate("/MainPage");
  };

  const handleRegister = () => {
    if (
      name.current.value &&
      description.current.value &&
      password.current.value &&
      userImage
    ) {
      let users = [JSON.parse(localStorage.getItem("users")) || []];

      const user = {
        name: name.current.value,
        password: password.current.value,
        description: description.current.value,
        image: userImage,
      };

      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      goToHomePage();
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-gradient-to-r from-indigo-300 to-purple-500">
      <div className=" flex items-center justify-center">
        <Camera />
      </div>
      <div className="  flex flex-col justify-center">
        <form className=" max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg  text-center">
          <h2 className="text-4xl dark:text-black mb-6 font-bold">REGISTER</h2>
          <div className=" flex flex-col py-2 text-black">
            <label> Name</label>
            <input
              className="rounded-lg bg-gray-200 mt-2 p-2 focus:border-violet-800 focus:bg-purple-200 focus:outline-none"
              type="text"
              ref={name}
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
            onClick={handleRegister}
            className="hover:bg-pink-400 w-full my-5 py-2 bg-pink-500 shadow-lg shadow-pink-500/50 hover:shadow-pink-500/40 text-white font-semibold rounded-lg"
          >
            SIGN UP
          </button>
          <p>
            Already member? <Link to="/SignIn">Click here!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
