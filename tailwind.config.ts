import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f1f5ff',
          100: '#dae6ff',
          200: '#b3c7ff',
          300: '#8aa3ff',
          400: '#5f72ff',
          500: '#3c44db',
          600: '#2a2fb1',
          700: '#1d218a',
          800: '#16185f',
          900: '#0d0f3d'
        },
        accent: '#f5b041',
        dark: '#0c1222'
      },
      fontFamily: {
        display: ['var(--font-plus-jakarta)'],
        body: ['var(--font-plus-jakarta)']
      },
      backgroundImage: {
        'hero-pattern': "url('/images/pattern-motif.svg')"
      },
      boxShadow: {
        glow: '0 25px 70px rgba(60, 68, 219, 0.2)'
      }
    }
  },
  plugins: []
};

export default config;
