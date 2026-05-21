import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand greens — per Amy Johnson brand guide (March 2025)
        forest: {
          DEFAULT: '#465745', // brand accent (dark forest)
          light: '#5a6e58',
          dark: '#3a4839',
        },
        sage: {
          DEFAULT: '#8ba77d', // brand primary (sage)
          light: '#a8c096',
        },
        earth: {
          DEFAULT: '#6b4226',
          light: '#8b5a38',
        },
        cream: {
          DEFAULT: '#faf9f6',
          warm: '#f4f1ec',
          soft: '#f0ece4',
        },
        gold: {
          DEFAULT: '#b45309',
          light: '#d97706',
        },
        stone: {
          muted: '#57534e',
          border: '#e5e0d8',
        },
      },
      fontFamily: {
        lora: ['var(--font-lora)', 'Georgia', 'serif'],
        raleway: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
        branch: ['var(--font-branch)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
