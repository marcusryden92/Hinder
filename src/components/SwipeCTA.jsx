import React from "react";

function SwipeCTA() {
  return (
    <div className="ml-auto mr-auto mt-8 w-[80vw] h-[80vh] text-[.85rem] grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 max-w-[60rem] max-h-[37rem] rounded-lg shadow-xl p-5">
      <div
        className={`overflow-hidden relative h-auto w-[100%] md:h-[100%] md:w-auto rounded-lg flex-1 flex justify-center items-center gap-10`}
      >
        <button class="text-red absolute bottom-10 hover:before:bg-redborder-red-500 h-16 w-16 rounded-full overflow-hidden border border-red-500 bg-white px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full mr-[10rem]">
          <span class="relative z-10 text-[2rem] grid m-auto">✖️</span>
        </button>

        <button class="text-red absolute bottom-10 h-16 w-16 rounded-full overflow-hidden border border-green-500 bg-white px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-green-500 hover:before:left-0 hover:before:w-full ml-[10rem]">
          <span class="relative z-10 text-[2rem] grid m-auto">✔️</span>
        </button>

        <img
          className="object-cover block m-auto w-[100%] h-[100%] rounded-t-lg md:rounded-none md:rounded-s-lg"
          src="https://source.unsplash.com/random"
          alt=""
        ></img>
      </div>
      <div class="flex flex-col flex-colleading-normal flex-1 p-5 justify-center">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          UserName
        </h5>

        <div class="mb-3 font-normal rounded-lg text-gray-600 bg-white shadow-twe-inner text-start ">
          Hey there, I'm Max, a tech enthusiast and artist. By day, I'm all
          about creating sleek websites, and by night, I'm capturing stories
          through my lens. I'm passionate about nature, love diving into virtual
          reality, and enjoy bringing people together through meetups where we
          explore the fusion of tech, art, and human connection.
          <div class=" font-normal rounded-lg text-gray-600shadow-twe-inner p-4 italic">
            “Live like there is no tomorrow”
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwipeCTA;
