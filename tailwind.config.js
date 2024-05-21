/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This line ensures all JS and TS files in src are scanned
    "./src/components/**/*.{js,jsx,ts,tsx}", // Add this line to specifically include the components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
