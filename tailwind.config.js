module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Utilisation des couleurs lime de Tailwind pour remplacer les couleurs personnalisées
        backgroundDark: require('tailwindcss/colors').lime['950'], 
        borderNeon: require('tailwindcss/colors').lime['300'], 
        textNeon: require('tailwindcss/colors').lime['300'], 
      },
      boxShadow: {
        neon: `0 0 10px ${require('tailwindcss/colors').lime['300']}, 0 0 20px ${require('tailwindcss/colors').lime['300']}, 0 0 30px ${require('tailwindcss/colors').lime['300']}`,
      },
      fontFamily: {
        dos: ['"Press Start 2P"', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      },      
    },
  },
  plugins: [],
}
