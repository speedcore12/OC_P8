const Colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundDark: Colors.lime['950'], 
        borderNeon: Colors.lime['300'], 
        textNeon: Colors.lime['300'], 
      },
      boxShadow: {
        neon: `0 0 5px ${Colors.lime['300']}, 0 0 10px ${Colors.lime['300']}, 0 0 15px ${Colors.lime['300']}`,
      },
      textShadow: {
        neon: `0 0 5px ${Colors.lime['300']}`,
      },
      fontFamily: {
        dos: ['"Press Start 2P"', 'monospace'],
      },
      animation: {
        'expand-line': 'expand-line 1s ease-in-out forwards',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        'expand-line': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'), 
  ],
};
