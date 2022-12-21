/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/*.{html,js}",
  ],
  theme: {
    extend: {
      textColor:{
        skin:{
          base:'var(--color-text-base)',
          muted:'var(--color-text-muted)',
          inverted:'var(--color-text-inverted)'
        }
      },
      backgroundColor:{
        skin:{
          fill:'var(--color-fill)',
          'button-accent':'var(--color-button-accent)',
          'button-accent-hover':'var(--color-button-accent-hover)',
          'button-muted':'var(--color-button-muted)',
        }
      },
      borderColor:{
        skin:{
          fill:'var(--color-fill)',
          muted:'var(--color-button-accent-hover)',
        }
      },
      gradientColorStops:{
        skin:{
          hue:'var(--color-fill)'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
