import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fawn: {
          DEFAULT: 'var(--color-fawn)',
          soft: 'var(--color-fawn-soft)',
          light: 'var(--color-fawn-light)',
        },
        wheat: {
          DEFAULT: 'var(--color-wheat)',
          soft: 'var(--color-wheat-soft)',
          light: 'var(--color-wheat-light)',
        },
        'misty-rose': {
          DEFAULT: 'var(--color-misty-rose)',
          soft: 'var(--color-misty-rose-soft)',
          light: 'var(--color-misty-rose-light)',
        },
        'salmon-pink': {
          DEFAULT: 'var(--color-salmon-pink)',
          soft: 'var(--color-salmon-pink-soft)',
          light: 'var(--color-salmon-pink-light)',
        },
        bole: {
          DEFAULT: 'var(--color-bole)',
          soft: 'var(--color-bole-soft)',
          deep: 'var(--color-bole-deep)',
        },
      },
      fontFamily: {
        script: ['var(--font-script)', 'cursive'],
        serif: ['var(--font-serif)', 'serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(131, 81, 62, 0.08)',
        'glass-hover': '0 12px 36px 0 rgba(242, 138, 161, 0.18)',
        sweet: '0 4px 20px -2px rgba(242, 138, 161, 0.25)',
        'sweet-lg': '0 10px 30px -4px rgba(231, 174, 117, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'sparkle-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
      },
      animation: {
        'float-gentle': 'float-gentle 4s ease-in-out infinite',
        'sparkle-pulse': 'sparkle-pulse 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
