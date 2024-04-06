/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-00': '#007BFF',
        'primary-50': '#F0F2FF',
        'primary-100': '#E3E8FF',
        'primary-200': '#CCD6FF',
        'primary-250': '#D2EDFD',
        'primary-300': '#89ACFF',
        'primary-400': '#5F96FF',
        'primary-500': '#2982FF',
        'primary-600': '#006EEF',
        'primary-700': '#004EBA',
        'primary-800': '#0042A0',
        'primary-900': '#00337C',

        'secondary-00': '#2C928E',

        'black-00': '#1E1E1E',
        'black-50': '#F3F3F3',
        'black-100': '#E9E9E9',
        'black-200': '#DDDDDD',
        'black-300': '#B0B0B0',
        'black-400': '#9B9B9B',
        'black-500': '#868686',
        'black-600': '#727272',
        'black-700': '#505050',
        'black-800': '#424242',
        'black-900': '#363636',

        'text-grey': '#676767',
        'text-black': '#1A1A1A',
        
        'blue-150': '#C9E3FF',
        'pink-150': '#FFCFDB',
        'amber-150': '#FFEFD2',
        'green-150': '#E2FFEA',

        'info': '#2F80ED',
        'error': '#EB5757',
        'success': '#27AE60',
        'warning': '#E2B93B',

        'dark-gray': '#B2B2B2',
        'text-gray': '#9E9E9E',
        'black-gray': '#414141',
        'light-gray': '#E8E8E8',
      },
      fontFamily: {
        generalSans: ['General Sans', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      keyframes: {
        view: {
          '0%': { 
            opacity: 0, 
            transform: 'translateY(-5px) scale(0.99)' 
          },
          '100%': { 
            opacity: 1, 
            transform: 'translateY(0px) scale(1)' 
          },
        }
      },
      animation: {
        view: 'view 500ms ease-in-out 1',
      }
    },
  },
  plugins: [],
}

