/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        customWhite: '#f4f4f4',
        customLightGray: '#c4c4c4',
        customDarkGray: '#636569',
        customDark: '#1a1a1a',
      },
      fontFamily: {
        customPrimary: ['Noto Serif Vithkuqi', 'serif'],
        customSecondary: ['Futura PT', 'serif'],
      },
      fontSize: {
        '6xl': [
          '3.75rem',
          {
            lineHeight: '4.5rem',
          },
        ],
      },
    },
  },
  plugins: [],
};
