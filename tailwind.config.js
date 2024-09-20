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
        'pulse-slow': 'pulse 1.5s infinite' 
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
      },
      'pulse-slow': {
        '0%' :{
          'opacity': 0,
          'transform': 'scale(0.1)',
        },
        '50%': {
            'opacity': 0.7,
        },
        '100%': {
            'opacity': 0,
            'transform': 'scale(1.2)',
        },
      },
  },
  plugins: [],
}
}
}


