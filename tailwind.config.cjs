/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-light-blue': '#4dc0b5', // Define your custom color
        'custom-blue': '#61dafb',
        'csharp-blue': '#3c6bc0',
        'java-red': '#007396',
      },
      screens: {
        'custom': {'max': '407px'},
        'custom-name': {'max': '407px'},
      },
    },
  },
  plugins: [],
};
