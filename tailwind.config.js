/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      black: "#141414",
      coral: "#DB3138",
      grey: "#898989",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
}
