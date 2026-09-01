/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/js/**/*.js'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        bg: '#0B0B0D',
        surface: '#17181C',
        border: '#2A2C31',
        ink: '#F5F5F4',
        muted: '#9A9A9E',
        accent: {
          50: '#FFF4E8',
          100: '#FFE4C7',
          200: '#FFC98D',
          300: '#FFAD53',
          400: '#FF9B36',
          500: '#FF8A1E',
          600: '#E67300',
          700: '#B85C00',
          800: '#8A4500',
          900: '#3D2A16',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
