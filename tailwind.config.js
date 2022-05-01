module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        color1: '#CC2D4A',
        color2: '#D93B30',
        color3: '#BD196E',
        color4: '#DE3250',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
