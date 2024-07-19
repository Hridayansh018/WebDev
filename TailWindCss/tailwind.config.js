module.exports = {
  content: [
    './*.html',          // Include all HTML files in the root directory
    './**/*.html',       // Include all HTML files in subdirectories
    './src/**/*.{js,ts,jsx,tsx}', // Include JS, TS, JSX, TSX files in the src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
