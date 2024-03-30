import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMiniHeart } from "react-icons/hi2";
import { MdOutlineExitToApp } from "react-icons/md";
import { ContextProvider } from "../context/context";

export default function Header() {
  const { loggedInUser, setLoggedInUser, matches } =
    useContext(ContextProvider);
  const navigate = useNavigate();

  const ICONSIZE = 35;
  let MATCHCOUNT = matches.length;

  const handleLogOut = () => {
    setLoggedInUser(null);
    navigate("/");
  };

  return (
    <div
      className={`
      sticky
      z-50
      h-14	
      flex 
      justify-between
      items-center
      w-screen 
      shadow-lg
      text-white 
      text-xl
      capitalize
      font-bold
       p-4
	   min-h-[70px]
      `}
    >
      <div className="flex items-center justify-center">
        <div
          className="font-sans flex mr-2 items-center justify-center 
          header-icon font-bold h-10 w-10 
          rounded-full hover:scale-110 transition ease-in-out duration-500 border-2 border-white"
          style={{
            backgroundImage: `url(${loggedInUser?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className=" uppercase text-sm translate-y-1 ">
          {loggedInUser.name}
        </div>
      </div>

      <Link
        to="/mainpage"
        className="hover:scale-105 transition ease-in-out duration-500"
      >
        <h1 className="text-[2rem] text-[#FF6A7B]">HINDER</h1>
      </Link>
      <div className="pb-2 flex flex-row ">
        <div className="header-icon text-2xl flex justify-center items-end w-20 mr-2 group">
          <Link to="/matches">
            <HeaderIcon
              icon={
                <HiMiniHeart
                  size={ICONSIZE}
                  className={`${
                    MATCHCOUNT
                      ? "text-rose-600 hover:text-rose-500"
                      : "text-black group-hover:text-white"
                  } hover:scale-110 transition ease-in-out duration-500 `}
                />
              }
            />
          </Link>
          <div
            className={`text-xl mb-0.5 mr-1 transition ease-in-out duration-500  ${
              MATCHCOUNT ? "text-rose-500" : "text-black group-hover:text-white"
            }`}
          >
            {MATCHCOUNT}
          </div>
        </div>
        <div onClick={handleLogOut}>
          <HeaderIcon
            icon={
              <MdOutlineExitToApp
                size={ICONSIZE}
                className="black hover:scale-105 transition ease-in-out duration-500"
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

const HeaderIcon = ({ icon }) => {
  return <div className="header-icon pt-2">{icon}</div>;
};
