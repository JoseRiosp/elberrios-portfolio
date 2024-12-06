/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        micro5: ["'Micro 5'", 'sans-serif'],
        play:["'Play'", 'sans-serif']
      }
    },
  },
  plugins: [],
}

