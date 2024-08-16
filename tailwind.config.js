/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        animation: {
        'left-right': 'leftRight 2s infinite',
      },
      keyframes: {
        leftRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-50px)' },
        },
      },
    },
  },
  plugins: [],
}

