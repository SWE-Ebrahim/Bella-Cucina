/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E8B57',     // Sea Green
        secondary: '#FF8C00',   // Dark Orange
        accent: '#3CB371',      // Medium Sea Green
        light: '#F5FFF5',       // Light background
        dark: '#2C3E50',        // Dark text
      },
      backgroundImage: {
        'gradient-green': 'linear-gradient(135deg, #2E8B57 0%, #3CB371 100%)',
        'gradient-orange': 'linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)',
        'glass': 'rgba(255, 255, 255, 0.25)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}