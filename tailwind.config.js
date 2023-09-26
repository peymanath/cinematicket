/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      xs: ['0.7rem', { lineHeight: '1rem' }],
      sm: ['0.8rem', { lineHeight: '1.25rem' }],
      base: ['.87rem', { lineHeight: '1.5rem' }],
      lg: ['0.9rem', { lineHeight: '1.75rem' }],
      xl: ['1rem', { lineHeight: '1.75rem' }],
    },
    fontFamily: {
      serif: ['Dana'],
      sans: ['Dana'],
      display: ['Dana'],
      body: ['Dana'],
      mono: ['Dana'],
    },
    extend: {
      backgroundImage: {
        auth: "url('/images/auth_bg.svg')",
      },
      colors: {
        primary: '#ff3543',
        secondary: '#343542',
      },
    },
  },
  plugins: [],
};
