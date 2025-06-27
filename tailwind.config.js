/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        divine: {
          blue: '#1e3a8a',
          peacock: '#3b82f6',
          golden: '#f59e0b',
          saffron: '#fbbf24',
          rose: '#f43f5e',
          purple: '#7c3aed',
          cream: '#fef7ed',
        }
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};