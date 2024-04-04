/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans- serif"
      },
      colors: {
        "ctm-btn-color": '#D72050',
        "ctm-login-color": '#403F3F',
      },
    },
  },
  plugins: [require("daisyui")],
}

