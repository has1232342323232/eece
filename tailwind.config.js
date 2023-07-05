/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#ff4081', // Replace with your desired color value
        'hover-color' : '#9c1643',
        'hover-bg' : '#f56998',
      },
    },
  },
  plugins: [require("daisyui")],
}

