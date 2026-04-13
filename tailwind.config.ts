import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './app/**/*.{vue,ts}',
    './app/components/**/*.{vue,ts}',
    './app/stores/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#000B1F',
          900: '#001845',
          800: '#002D72',
          700: '#0047BB',
          600: '#1565C0',
          400: '#90CAF9',
          300: '#BBDEFB',
          200: '#E3F2FD',
          100: '#EBF5FF',
        },
      },
    },
  },
  plugins: [],
}
