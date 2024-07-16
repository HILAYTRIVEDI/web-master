/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'FoundersGrotesk': ['FoundersGrotesk', 'sans-serif'],
        'icomoon': ['icomoon', 'sans-serif'],
        'NeueMontreal': ['NeueMontreal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}