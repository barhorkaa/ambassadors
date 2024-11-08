import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      fi: {
        300: '#F2D45C',
        200: '#F2DE7F',
        100: '#F3E9A3',
      },
      muni: '#0000DC',
      black: '#000000',
      white: '#fcfcfc',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui')],
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
};
export default config;
