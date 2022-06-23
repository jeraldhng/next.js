/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          400:'#969798',
          400:'#666666',
          700:'#353535',
          800:'#262626',
          900:'#171818'
        }
      }
    },
  },
  plugins: [],
}
