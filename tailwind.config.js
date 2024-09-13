/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'logo': '#df1b48',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 75s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
    },
  },
  plugins: [],
}
}
}


