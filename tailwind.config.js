/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/**/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        'logo': '#df1b48',
        'ghost': '#F3F4F6',
      },
      fontFamily: {
        work: ['Work Sans', 'sans-serif'],
        marcellus: ['Marcellus', 'serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 100s linear infinite',
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


