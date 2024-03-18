/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003BE6",
        "light-purple": "#7565FA",
        "dark-purple": "#5C49FB",
        lime: "#D9FFBB",
      },
      backgroundImage: {
        home: "url('../src/images/Perlin.png')",
        per: "url('../src/images/person.png')",
      },
    },
  },
  plugins: [],
};
