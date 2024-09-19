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
        'ghost-2': '#F4F5F9',
        'ghost-3': '#F5F5F7',
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


