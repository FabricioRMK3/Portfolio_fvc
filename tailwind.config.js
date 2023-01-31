/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './public/index.html', 
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}'
],
  theme: {
    
    extend: {
      colors:{
        'c-color':'#3E6D9C'
      },
      keyframes:{
        tittle:{
          '0%':{transform:'scale(0)',opacity:'0%'},
          '100%':{transform:'scale(1)',opacity:'100%'},

        },
        more:{
          '0%':{transform:'scale(0)'},
          '100%':{transform:'scale(1)'},

        }
      },
      animation:{
        tittle:'tittle 1.0s ease-in-out',
        more:'more 2.0s ease-in-out'
      }
    },
  },
  plugins: [
    require('tailwind-clip-path')
  ],
}
