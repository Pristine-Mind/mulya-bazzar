/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        primary: '#2B6CB0',  // Adjust to match the reference site
        accent: '#FF6347',  // Adjust for hover effects
        secondary: '#4A5568',  // Text color
        background: '#F7FAFC',  // Background color
        orange: {
          DEFAULT: '#ff8800',
          light: '#ffb347',
        },
        yellow: {
          DEFAULT: '#ffd600',
          light: '#fff176',
        },
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
export default config;
