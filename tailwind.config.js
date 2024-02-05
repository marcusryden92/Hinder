/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          100: "#F6D6D3",
          500: "#ff6a7b",
          600: "##FF5266",
        },
        white: "#F7F2E8",
        purple: "#660066",
      },
      boxShadow: {
        small:
          " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;",
        medium: "0px 0px 0px 2px rgba(0,0,0,1), 8px 8px 0px 0px rgba(0,0,0,1)",
        webcam:
          " 0 0 0 2px rgba(218,102,123,1), 8px 8px 0 0 rgba(218,102,123,1);",
      },
    },
  },
  plugins: [],
};
