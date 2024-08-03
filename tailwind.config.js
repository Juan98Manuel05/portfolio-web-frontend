/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      'align-content':'center',
      'yellow':'#ffd344',
      'purple': '#361d43',
      'yellow-light': '#f0c762'
    },
    container:{
      screens:{
        'xl': '1440px'
      }
    },
  },
  plugins: [],
}

