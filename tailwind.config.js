/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#B2B2B2',
        'text-gray': '#9E9E9E',
        'black-gray': '#414141',
        'blacker-gray': '#1E1E1E',
        'light-gray': '#E8E8E8',
      },
      fontFamily: {
        generalSans: ['General Sans', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

