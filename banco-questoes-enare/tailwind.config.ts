import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta neutra + acento clínico (teal), legível em claro e escuro.
        brand: {
          50: '#eefdfb',
          100: '#d3f8f3',
          200: '#abf0e9',
          300: '#71e3db',
          400: '#33cdc7',
          500: '#17b0ae',
          600: '#0f8d8e',
          700: '#107072',
          800: '#12595c',
          900: '#144a4d',
          950: '#042a2e',
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
