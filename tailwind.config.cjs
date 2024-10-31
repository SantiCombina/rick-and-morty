/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors: {
        primary: "#edf2fc",
        secondaty: "#212121"
      },
      boxShadow: {
        "switch-dark": "inset 0 0 8px rgba(255, 255, 255, 0.1)",
        "switch-light": "inset 0 0 8px rgba(0, 0, 0, 0.1)",
        "button-dark": "inset 0 0 3px rgba(255, 255, 255, 0.2)",
        "button-light": "inset 0 0 3px rgba(0, 0, 0, 0.2)"
      }
    },
  },
  plugins: [],
  darkMode: "class",
}
