/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg-1' : "url('../src/assets/bg/bg1.png')",
        'bg-2' : "url('../src/assets/bg/bg2.png')",
        'bg-3' : "url('../src/assets/bg/bg3.png')",
      },
    },
  },
  plugins: [],
}
