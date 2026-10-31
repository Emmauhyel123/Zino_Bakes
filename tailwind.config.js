/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#fdf6ec',
        vanilla: '#f7e7c6',
        blush: '#f4cfc6',
        peach: '#f2b79c',
        espresso: '#3b2a24',
        charcoal: '#2b2523',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      animation: { floaty: 'floaty 6s ease-in-out infinite' },
    },
  },
  plugins: [],
};
