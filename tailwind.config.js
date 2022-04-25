module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
        roboto: ['Roboto', 'sans-serif'],
      },
      height: {
        128: '32rem',
        'screen-90': '90vh',
        'max-h-8': 'max-height:8em'
      },
    },
  },
  plugins: [],
};
