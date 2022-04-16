module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '780px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        'primary': ['Be Vietnam Pro', 'sans-serif']
      },
      backgroundImage : {
        'hero-background': "url('/src/images/bg-tablet-pattern.svg')",
        'cta-background': "url('/src/images/bg-simplify-section-desktop.svg')",
        'cta-background-sm': "url('/src/images/bg-simplify-section-mobile.svg')",
      },
      backgroundPosition: {
        'hero': '130% -15%',
        'hero-sm': '72px -136px',
        'hero-sec': '239px 337px'
      },
      backgroundSize: {
        'hero-bg-size': '800px',
        'hero-sm-size': '500px',
        'hero-sec-size': '400px',
        'testi-size' : '650px'
      }
    },
  },
  plugins: [],
}
