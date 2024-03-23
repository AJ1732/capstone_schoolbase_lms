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
        'light-gray': '#E8E8E8',
      },
    },
  },
  plugins: [],
}

