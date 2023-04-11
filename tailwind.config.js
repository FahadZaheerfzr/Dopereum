/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '96': '24rem', // existing margin value
        '128': '500px', // new margin value in px:
        '160': '40rem', // new margin value
        '192': '45rem', // new margin value
        '224': '56rem', // new margin value
        '256': '64rem', // new margin value
        '288': '72rem', // new margin value
      },
      top : {
        '90': '20rem',
        '96': '24rem', // existing margin value
        '128': '500px', // new margin value in px:
        '160': '40rem', // new margin value
        '192': '45rem', // new margin value
        '224': '56rem', // new margin value
      },
      screens: {
        'lg': '1000px',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        blanka: ['Blanka-Regular', 'sans-serif'],
      },
      colors: {
        mainGreen: '#7ED957',
        secondaryGreen: '#C1FF72',
        mainGray: '#545454',
        secondaryGray: '#0B0C19',
        mainGreen2: '#82DB59',
        secondaryGreen2: '#83DC59',
      },
      fontSize: {
        'xxs': '10px',
        'xxsl': '12px',
        'xs': '14px',
        'sm': '16px',
        'tiny': '18px',
        'base': '20px',
        'lg': '22px',
        'xl': '24px',
        'xxl':'25px',
        '2xl': '26px',
        '3xl': '28px',
        '3.5xl': '30px',
        '3.6xl': '33px',
        '3.75xl': '35px',
        '4xl': '36px',
        '4.5xl': '38px',
        '5xl': '55px',
        '6xl': '66px',
        '7xl': '5rem',
      },
      rotate: {
        '5': '5deg',
        '10': '10deg',
        '15': '15deg',
        '20': '20deg',
        '30': '30deg',
        '35': '35deg',
        '95': '95deg',
        '100': '100deg',
        '105': '105deg',
      },
      backgroundImage: theme => ({
        'radial-gradient': 'radial-gradient(ellipse at center, #C1FF72 0%, #7ED957 100%)',
        'radial-gradient2': 'radial-gradient(ellipse at center, #636367 0%, #545454 100%)',
        'radial-gradient3': 'radial-gradient(ellipse at center, #545454 0%, #0B0C19 50%)',
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')
  ],
}
