/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      // Yahan tu apne custom "Premium" colors add kar sakta hai
      colors: {
        brand: {
          light: '#fbfbfd',
          dark: '#1d1d1f',
          blue: '#0066cc'
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
