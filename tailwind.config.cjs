/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{svelte,js}",
  ],
  theme: {
    extend: {
      maxWidth:{
        '180':'180px'
      }
    },
  },
  plugins: [],
}
