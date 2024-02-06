import { useContext } from "react";
import { ContextProvider } from "../context/context";
import { Link } from "react-router-dom";

function Matches() {
  const { matches } = useContext(ContextProvider);

  return (
    <div className="relative overflow-hidden w-screen p-10">
      <h1 className="text-3xl font-bold text-center">Your Matches</h1>
      <Link to="/mainpage">
        <button className="bg-indigo-200 m-4 hover:bg-pink-400 text-black font-bold py-2 px-4 rounded ">
          GO BACK HOME
        </button>
      </Link>

      <div className="w-screen flex flex-col items-center justify-center text-center m-auto">
        <div className=" flex flex-wrap">
          {matches.length > 0 ? (
            matches.map((user, index) => {
              return (
                <div
                  key={index}
                  className={`w-56 h-76 m-3 rounded-xl overflow-hidden relative group cursor-pointer flex`}
                  onClick={() => {
                    handleImageClick(user);
                  }}
                >
                  <img
                    src={user.image}
                    alt={`Picture ${user.name}`}
                    className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
                  />
                  <div className="absolute inset-x-3 bottom-1">
                    <p className="text-white font-semibold">{user.name}</p>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
                </div>
              );
            })
          ) : (
            <div>You don't have any matches yet! ❤️‍🔥</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Matches;
