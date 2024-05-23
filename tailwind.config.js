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
        primary: '#2474E5',
        blacktransparent: 'rgba(0,0,0,.5)'
      },
      boxShadow: {
        primary: 'box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px',
        secondary: 'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px'
      },
      objectPosition: {
        'center-top': 'center top'
      },
      backgroundImage: {
        'station-card': 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 100%)'
      },
      spacing: {
        modalBaseWidth: "600px",
        modalMediumWidth: "900px",
        modalLargeWidth: "1000px",
      },
      borderColor: {
        primary: '#2474E5'
      },
      textColor: {
        primary: '#2474E5'
      }
    },
  },
  plugins: [],
}

