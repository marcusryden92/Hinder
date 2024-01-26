import React from "react";
import { useState, useEffect } from "react";

export default function SwipeCTA() {
  const [quote, setQuote] = useState(null);
  const [image, setImage] = useState("https://source.unsplash.com/random");

  function renderImage() {
    fetch(`https://source.unsplash.com/random`).then((response) => {
      setImage(response.url);
    });
  }
  useEffect(() => {
    async function fetchData() {
      fetch("https://type.fit/api/quotes")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          const randomQuote = Math.floor(Math.random() * data.length);
          const newQuote = data[randomQuote].text;
          if (newQuote.length > 70) {
            fetchData();
          } else {
            setQuote(newQuote);
          }
        });
    }
    fetchData();
  }, [image]);

  return (
    <div className="ml-auto mr-auto w-[95vw] h-[80vh] text-[.8rem] grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 max-w-[60rem] max-h-[37rem] rounded-lg shadow-xl p-5">
      <div
        className={`overflow-hidden relative h-auto w-[100%] md:h-[100%] md:w-auto rounded-lg flex-1 flex justify-center items-center gap-10`}
      >
        <button className="text-red absolute bottom-10 hover:before:bg-redborder-red-500 h-16 w-16 rounded-full overflow-hidden border border-red-500 bg-white px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full mr-[10rem]">
          <span className="relative z-10 text-[2rem] grid m-auto">✖️</span>
        </button>

        <button
          onClick={renderImage}
          className="text-red absolute bottom-10 h-16 w-16 rounded-full overflow-hidden border border-green-500 bg-white px-3 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-green-500 before:transition-all before:duration-500 hover:text-white hover:shadow-green-500 hover:before:left-0 hover:before:w-full ml-[10rem]"
        >
          <span className="relative z-10 text-[2rem] grid m-auto">✔️</span>
        </button>

        <img
          className="object-cover block m-auto w-[100%] h-[100%] rounded-t-lg md:rounded-none md:rounded-s-lg"
          src={image}
          alt=""
        ></img>
      </div>
      <div className="flex flex-col flex-colleading-normal flex-1 p-5 justify-center">
        <h5 className=" text-2xl font-bold tracking-tight mb-2 text-gray-900">
          UserName
        </h5>

        <div className="mb-3 font-normal rounded-lg text-gray-600 bg-white shadow-twe-inner text-start ">
          Hey there, I'm Max, a tech enthusiast and artist. By day, I'm all
          about creating sleek websites, and by night, I'm capturing stories
          through my lens. I'm passionate about nature, love diving into virtual
          reality.
          <div className=" font-normal rounded-lg text-gray-600 shadow-twe-inner pl-4 pt-4 italic">
            “{quote}”
          </div>
        </div>
      </div>
    </div>
  );
}

//     useEffect(() => {
//       async function fetchData() {
//         const url =
//           "https://famous-quotes4.p.rapidapi.com/random?category=all&count=2";
//         const options = {
//           method: "GET",
//           headers: {
//             "X-RapidAPI-Key":
//               "2d640366b0msh8927fe9cb9f1ec6p158e2djsnda7256755aab",
//             "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
//           },
//         };

//         try {
//           const response = await fetch(url, options);
//           const result = await response.json();
//           const newQuote = result[0].text;
//           if (newQuote.length > 70) {
//             fetchData();
//           } else {
//             setQuote(newQuote);
//           }
//         } catch (error) {
//           console.error(error);
//         }
//       }
//       fetchData();
//     }, [image]);
