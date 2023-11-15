/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT'
export default withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        backOscuro: '#0f766e',
        backTurquesa: '#14b8a6',
        letrasHead: '#FFFFFF',
        letrasNaraOscuro: '#A6360D',
        negroClaro: '#0D0D0D',
        azulClaro: '#2dd4bf',
        marronClaro: '#38bdf8',
        marronForm: '#7C593B',
      },
      backgroundImage: {
        'hero-Img': "url('src/assets/img/imgHero.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'servicios-Img': "url('src/assets/img/divServicios.jpg')",
        'mar-img':"url('src/assets/img/mar.jpg')",
        'mar-img1':"url('src/assets/img/mar2.PNG')",
        'mar-img2':"url('src/assets/img/mar3.PNG')",
        'mirador-img':"url('src/assets/img/mirador.jpg')",
        'playa-img':"url('src/assets/img/Playa-el-Agua.jpg')",
        'virgen-img':"url('src/assets/img/virgen.jpg')",
        'porla-img':"url('src/assets/img/porla.jpg')",

      },
      fontFamily: {
        workSans: ['Work Sans', 'sans-serif'],
        satisfy: ['Satisfy', 'sans-serif'],
      },
      screens: {
        sm: '540px',
        // => @media (min-width: 640px) { ... }

        md: '800px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [require('flowbite/plugin')],
})
