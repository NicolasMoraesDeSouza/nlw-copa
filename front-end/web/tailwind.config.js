/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif' 
      }
    },
    backgroundImage: {
      app: 'url(/app-bg.png)'
    },
    colors:{
      white: '#FFFFFF',
      black: '#000000',
      gray:{
        text: '#E1E1E6',
        200: '#C4C4CC',
        400: '#8D8D99',
        500: '#323238',
        600: '#202024',
        900: '#121214'
      },
      green: {
        300: '#129E57',

      },
      yellow: {
        400: '#F7DD43'
      } 
    },
    fontSize: {
      base: '14px',
      sm: '16px',
      md: '20px',
      lg: '24px',
      xl: '48px',



    },
    
  },
  plugins: [],
}
