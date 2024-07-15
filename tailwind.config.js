/** 
@type {import('tailwindcss').Config} 

*/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Josefin Slab", "serif"],
        heading: ["Rubik Mono One", "monospace"],
      },
      colors: {
        wheat: "#f5deb3",
        "text-color": "#2d2d2d",
        "wheat-gradient": "rgb(2,0,36)",
        "primary-orange": "#fbc50b",
        "orange-lite": "rgb(251, 247, 244)",
        "primary-green": "#004d0c",
        "primary-link": "#00c700",
        "primary-link-hover": "#004d0c",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
