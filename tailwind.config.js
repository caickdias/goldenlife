/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-blue": "#293158",
        "main-gold": "#DAA520",
        "main-text": "#353535"
      }
    },
  },
  plugins: [],
}

