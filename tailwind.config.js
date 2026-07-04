/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coastal: {
          light: '#f0f4f8',
          sand: '#eaddcf',
          water: '#75b9be',
          deep: '#1e3d59',
          accent: '#ff6e40',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
