/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lot-orange': '#FF9E1A',
      },
      fontFamily:
      {
        'poppins' : ["Poppins", 'sans-serif'],
      },
      minHeight: {
        '1/2': '50%',
        '6vh' : '6vh',
        '8vh' : '8vh',
        '94vh' : '94vh',
        '20per' : '20%',
        '40per' : '40%',
        '80per' : '80%',
      },
      backgroundImage: {
        'cta-pattern': "url('Images/cta-bg.png')",
      },
    },
  },
  plugins: [],
}
