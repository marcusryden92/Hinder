export default function Carousel({ setActiveUser, carouselImages }) {
  if (!carouselImages) return null;
  return (
    <>
      <div className=" bg-white overflow-auto min-h-[192px] w-[50rem] m-auto relative">
        <div className="w-fit">
          <div className="flex gap-[2rem]">
            {carouselImages.map((user, index) => {
              return (
                <div
                  key={index}
                  className={`w-56 h-[10rem] m-3 rounded-xl overflow-hidden flex flex-col relative group cursor-pointer hover:shadow-large transition duration-300 ease-in-out scale-100 hover:scale-105`}
                  onClick={() => {
                    setActiveUser(user);
                  }}
                >
                  <img
                    src={user?.image}
                    alt={`Picture ${user?.name}`}
                    className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
                  />
                  <div className="absolute inset-x-3 bottom-1">
                    <p className="text-white text-sm">{user?.name}</p>
                  </div>
                  <div className="absolute inset-0 bg-black opacity-0 transition duration-300 ease-in-out group-hover:opacity-20"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
