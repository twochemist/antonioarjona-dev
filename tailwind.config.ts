import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './ui/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#15171c',
        paper: '#fbfaf7',
        clay: '#d75d3f',
        mist: '#e8eef2',
        graphite: '#202631',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(21, 23, 28, 0.1)',
      },
    },
  },
  plugins: [],
}

export default config
