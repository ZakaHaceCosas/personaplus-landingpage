/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    content: ["./src/**/*.{html,js}"],
  },
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      'fontFamily': {
        'mono': ['JetBrains Mono', 'monospace'],

        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

