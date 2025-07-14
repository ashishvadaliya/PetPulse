/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        button: "#2D57ED",
      },
      keyframes: {
        'partner-slide': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'partner-slide': 'partner-slide 30s linear infinite'
      }
    },
    fontFamily: {
        sf: ["SF UI Text-Regular", "Helvetica", "sans-serif"],
        "sf-medium": ["SF UI Text-Medium", "Helvetica", "sans-serif"],
        "sf-semibold": ["SF UI Text-Semibold", "Helvetica", "sans-serif"]
      }
  },
  plugins: [],
};
