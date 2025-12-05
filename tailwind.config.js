/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#059669',
          600: '#14b6b8' /* used in PDF as primary */,
          700: '#0e8c8d'
        },
      }
    }
  },
  plugins: []
}
