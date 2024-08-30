/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#f59e0b',
        dark: '#141414',
        secondary: '#64748b',
        html: '#E44D26',
        css: '#1572B6',
        javascript: '#F0DB4F',
        bootstrap: '#7952B3',
        github: '#000000',
        jquery: '#78CFF5'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-45deg)' },
          '50%': { transform: 'rotate(45deg)' }
        },
        fadeRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-2rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        fadeLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(2rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(2rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        wiggleUp: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-3%)'
          },
        },
        wiggleUpFast: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-40%)'
          },
        }
      },
      animation: {
        'wiggle-1.5s': 'wiggle 1500ms ease-in-out infinite',
        'wiggle-2s': 'wiggle 2000ms ease-in-out infinite',
        'wiggle-2.5s': 'wiggle 2500ms ease-in-out infinite',
        'fadeRight-500': 'fadeRight 500ms ease-in-out',
        'fadeRight-800': 'fadeRight 800ms ease-in-out',
        'fadeRight-1.1': 'fadeRight 1100ms ease-in-out',
        'fadeRight-1.5': 'fadeRight 1500ms ease-in-out',
        'fadeLeft-500': 'fadeLeft 500ms ease-in-out',
        'fadeLeft-800': 'fadeLeft 800ms ease-in-out',
        'fadeLeft-1.1': 'fadeLeft 1100ms ease-in-out',
        'fadeLeft-1.5': 'fadeLeft 1500ms ease-in-out',
        'fadeUp': 'fadeUp 1000ms ease-in-out',
        'bounce': 'bounce 2000ms ease-in-out infinite',
        'wiggleUp': 'wiggleUp 4000ms ease-in-out infinite',
        'wiggleUpFast': 'wiggleUp 1000ms ease-in-out infinite'
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwind-scrollbar')
  ],
}

