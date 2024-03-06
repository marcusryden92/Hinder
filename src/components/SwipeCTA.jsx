import { useState, useContext } from "react";
import { ContextProvider } from "../context/context";
import useFindUserIndex from "../hooks/useFindUserIndex";
import useGetMatches from "../hooks/useGetMatches";
import { HiMiniHeart } from "react-icons/hi2";
import { ImCross } from "react-icons/im";

export default function SwipeCTA({ activeUser, removeCarouselImage }) {
  const [animation, setAnimation] = useState("");
  const { loggedInUser, setMatches } = useContext(ContextProvider);

  const handleAnimate = (state) => {
    setAnimation(state);
    setTimeout(() => {
      setAnimation(null);
    }, 600);
  };

  const handleLike = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentlyLoggedInUserIndex = useFindUserIndex(loggedInUser.username);
    users[currentlyLoggedInUserIndex].liked.push(activeUser.username);
    localStorage.setItem("users", JSON.stringify(users));

    const tempMatches = useGetMatches(loggedInUser.username);
    setMatches(tempMatches);
  };

  const handleDislike = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentlyLoggedInUserIndex = useFindUserIndex(loggedInUser.username);
    users[currentlyLoggedInUserIndex].disliked.push(activeUser.username);
    localStorage.setItem("users", JSON.stringify(users));

    const tempMatches = useGetMatches(loggedInUser.username);
    setMatches(tempMatches);
  };

  return (
    <div className=" bg-white min-h-[25rem] max-h-[30rem] max-w-[50rem] mb-10 rounded-lg ml-auto mr-auto w-[70vw] text-[.8rem] grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 p-[2rem] shadow-medium ">
      <div
        className={` md:overflow-hidden relative h-auto w-[100%] md:h-[100%] md:w-auto rounded-lg flex-1 flex justify-center items-center gap-10`}
      >
        <button
          onClick={() => {
            handleAnimate("disliked");
            removeCarouselImage(activeUser);
            handleDislike();
          }}
          className=" text-red absolute bottom-10 hover:before:bg-redborder-red-500 h-16 w-16 rounded-full overflow-hidden border  bg-white px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full mr-[10rem] grid justify-center items-center translate-x-[2rem] translate-y-[14rem] sm:translate-x-0 sm:translate-y-0 z-50"
        >
          <span className="z-10 text-[2rem] text-red-500 hover:text-white  transition ease-in-out duration-500">
            <ImCross className="" />
          </span>
        </button>

        <button
          onClick={() => {
            handleAnimate("liked");
            removeCarouselImage(activeUser);
            handleLike();
          }}
          className="text-red absolute bottom-10 h-16 w-16 rounded-full overflow-hidden border border-green-500 bg-white px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-green-500 hover:before:left-0 hover:before:w-full ml-[10rem] grid justify-center items-center translate-x-[-2rem] sm:translate-x-0 translate-y-[14rem] sm:translate-y-0 z-50"
        >
          <span className="z-10 text-green-500 text-[3rem] hover:text-white  transition ease-in-out duration-500">
            <HiMiniHeart />
          </span>
        </button>
        {activeUser ? (
          <img
            className={`object-cover block m-auto w-[100%] h-[100%] rounded-t-lg md:rounded-none md:rounded-s-lg delay-75
    ${
      animation === "liked"
        ? "transition-translate duration-200  translate-x-[100%]"
        : ""
    }
    ${
      animation == "disliked"
        ? "transition-translate duration-200  translate-x-[-100%]"
        : ""
    }
  `}
            src={activeUser.image}
            alt=""
          />
        ) : (
          <div>NO USERS TO SWIPE ON!</div>
        )}
      </div>
      <div className="flex flex-col flex-colleading-normal flex-1 p-5 justify-center rounded-xl">
        <h5 className="  text-2xl uppercase font-bold text-gray-900 text-center ">
          {activeUser?.name}
        </h5>

        <div className="text-black text-center p-2 text-[.7rem] ">
          {activeUser?.description}
        </div>
      </div>
    </div>
  );
}
