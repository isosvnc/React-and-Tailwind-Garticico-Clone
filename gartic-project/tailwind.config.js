/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgColor': '#0a5efb',
        'titleColor' : '#ffbf00',
        'formColor':'#0257bc'
      },
      backgroundImage: {
        'Bg':"url('./img/background.png')",
        'titleBG':"url('https://gartic.io/static/images/new/title.png')"
      }
    },
  },
  plugins: [],
}
