/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js"
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#2474E5'
      },
      boxShadow: {
        primary: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px',
        secondary: 'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px'
      }
    },
  },
  plugins: [],
}

