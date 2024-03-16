/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        "design-green": "#6DA426",
        "design-green-light": "#A2F239",
        "design-gray": "#999999",
        "design-gray-light": "#D0D0D0",
        "design-gray-dark": "#797979",
        "design-dark": "#313131",
        "design-black": "#282828",
        "design-white": "#FFFFFF",
        "design-pending": "#CF6565",
        "design-success": "#4BB56C"
      }
    },
  },
  plugins: [],
}

