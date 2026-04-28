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
        forest: {
          DEFAULT: '#2d5a27',
          light: '#3d7a34',
          dark: '#1e3d1b',
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
        sage: {
          DEFAULT: '#7a9e7a',
          light: '#a8c5a8',
        },
        stone: {
          muted: '#57534e',
          border: '#e5e0d8',
        },
      },
      fontFamily: {
        lora: ['var(--font-lora)', 'Georgia', 'serif'],
        raleway: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
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
