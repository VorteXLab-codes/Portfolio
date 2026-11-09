/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        base: '#141b26',
        surface: '#222a36',
        line: '#29313e',
        chip: '#363e4a',
        accent: '#0cdefc',
        'accent-ink': '#00586e',
        ink: {
          DEFAULT: '#fbfeff',
          body: '#a5acb8',
          muted: '#8a919c',
          faint: '#6a717d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}