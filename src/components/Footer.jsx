import React from "react";

import { useState, useEffect } from "react";

export default function Footer() {
  const [quote, setQuote] = useState(null);
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
  }, []);

  return (
    <div
      className={`absolute bottom-0 w-screen font-serif
    align-middle
    text-center
    italic
    text-sm
    w-screen 
    p-2 h-14
    pt-4 
    shadow-lg
    text-gray-300
    bg-zinc-900 `}
    >
      "{quote}"
    </div>
  );
}
