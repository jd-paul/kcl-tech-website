/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'dark-grey': 'rgb(36, 36, 36)',
        'medium-grey': 'rgb(99, 99, 99)',
        'light-grey': 'rgb(240, 240, 240)',
        'ash': 'rgb(244, 244, 244)',
        'primary-color': 'rgb(43, 114, 251)',
        'white': 'rgb(255, 255, 255)',
        'accent-color-a': 'rgb(255, 148, 109)',
        'accent-color-b': 'rgb(52, 212, 212)',
        'accent-color-c': 'rgb(219, 190, 255)',
        'main-color': 'rgb(8, 60, 92)',
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
      },
      borderWidth: {
        'custom': '1px',
      },
      borderColor: {
        'custom-border': 'var(--light-grey)',
      },
      gradientColorStops: {
        'gradient-a': 'rgb(202, 168, 245)',
        'gradient-b': 'rgb(204, 108, 229)',
        'gradient-c': 'rgb(79, 69, 165)',
      },
      fontFamily: {
        'share-tech': ['Share Tech Mono', 'monospace'],
        'titillium': ['Titillium Web', 'sans-serif'],
        'exo': ['Exo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
