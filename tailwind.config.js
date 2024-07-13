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
        blacktransparent: 'rgba(0,0,0,.5)',
        pending: '#f5e342',
        approved: '#1b9e13',
        completed: '#13999e',
        canceled: '#c4221a',
        payment_method: '#b83a1d',
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
      },
      height: {
        largeContainer: 'calc(90vh - 180px)',
        smallContainer: 'calc(100vh - 180px)',
        rentPageContainer: 'calc(100vh - 72px)'
      },
      width: {
        largeCardContainer: 'calc(100% - 150px)'
      },
    },
  },
  plugins: [],
}

