/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        bounceDown: {
          '0%': {
            transform: 'translateY(-100%)',
            animationTimingFunction: 'ease-in',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-out',
          },
          '75%': {
            transform: 'translateY(-15%)',
            animationTimingFunction: 'ease-in',
          },
          '100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'ease-out',
          },
        },
      },
      animation: {
        fadeInLeft: 'fadeInLeft 1s ease-out forwards',
        fadeInDown: 'fadeInDown 1s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
        fadeInRight: 'fadeInRight 1s ease-out forwards',
        slideInDown: 'slideInDown 1s ease-out forwards',
        bounceDown: 'bounceDown 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
