import { useContext, useState, useEffect } from "react";
import { ContextProvider } from "../context/context";
export default function Carousel() {
  const { allUsers, handleCarouselClick } = useContext(ContextProvider);
  const [visibleCarousel, setVisibleCarousel] = useState(0);
  useEffect(() => {
    setVisibleCarousel(allUsers ? allUsers[0] : null);
  }, [allUsers]);
  function handleImageClick(user) {
    setVisibleCarousel(user === visibleCarousel ? null : user);
  }
  return (
    <div className="m-8 relative overflow-auto">
      <div className="w-fit">
        <div className="overflow-x-auto flex">
          {/* start profile */}
          {allUsers &&
            allUsers.map((user) => (
              <button key={user.name} onClick={() => handleImageClick(user)}>
                <div
                  className={`w-56 h-76 m-3 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer ${
                    user === visibleCarousel ? "block" : "hidden"
                  }`}
                >
                  <img
                    src={user.image}
                    alt={`Picture ${user.name}`}
                    className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
                    onClick={() => handleCarouselClick(user)}
                  />
                  <div className="absolute inset-x-3 bottom-1">
                    <p className="text-white font-semibold">{user.name}</p>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
                </div>
              </button>
            ))}
          {/* end profile */}
        </div>
      </div>
    </div>
  );
}
