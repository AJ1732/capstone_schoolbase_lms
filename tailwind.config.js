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
        'primary-10': '#D9E0FF',
        'primary-50': '#F0F2FF',
        'primary-100': '#E3E8FF',
        'primary-200': '#CCD6FF',
        'primary-250': '#D2EDFD',
        'primary-900': '#0B1A3A',

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
        'text-black': '#1B1B1B',
        
        'blue-150': '#C9E3FF',
        'pink-150': '#FFCBCC',
        'amber-150': '#FFEFD2',
        'green-150': '#E2FFEA',

        'info': '#2F80ED',
        'error': '#C4013D',
        'error-100': '#360D11',
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
      animation: {
        'bead': 'beads 1.5s ease-in-out infinite',
        'view': 'view 500ms ease-in-out 1',
      },
      keyframes: {
        'beads': {
          '0%, 100%': { 
            transform: 'scale(0.2)',  
            backgroundColor: "#00337C",
          },
          '40%': { 
            transform: 'scale(1)',
            backgroundColor: '#004EBA',
          },
          '50%': { 
            transform: 'scale(1)',
            backgroundColor: '#2982FF',
          },
        },
        'view': {
          '0%': { 
            opacity: 0, 
            transform: 'translateY(-5px) scale(0.99)' 
          },
          '100%': { 
            opacity: 1, 
            transform: 'translateY(0px) scale(1)' 
          },
        }
      }
    },
  },
  plugins: [],
}

