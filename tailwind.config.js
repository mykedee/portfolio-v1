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
        "wheat-gradient": "rgb(2,0,36)",
        "primary-orange": "#fbc50b",
        "orange-lite": "rgb(251, 247, 244)",
        "primary-green": "#004d0c",
        "primary-link": "#00c700",
        "primary-link-hover": "#004d0c",
        "dash-bg": "#f5f5f5",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
