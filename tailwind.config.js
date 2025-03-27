/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#dcedff',
          200: '#bbdaff',
          300: '#86c1ff',
          400: '#4a9fff',
          500: '#2280ff',
          600: '#1665e0',
          700: '#1550c8',
          800: '#1642a0',
          900: '#143975',
        },
      },
    },
  },
  plugins: [],
};