/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          primary: 'var(--color-text-primary)',
          inverted: 'var(--color-text-inverted)',
          secondary: 'var(--color-text-secondary)',
          'outline-hover': 'var(--color-text-outline-hover)',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'button-primary': 'var(--color-button-primary)',
          'button-primary-hover': 'var(--color-button-primary-hover)',
          'button-secondary': 'var(--color-button-secondary)',
          'button-outline': 'var(--color-button-outline)',
          'button-outline-hover': 'var(--color-button-outline-hover)',
        },
      },
      borderColor: {
        skin: {
          'border-outline': 'var(--color-border-outline)',
        },
      },
    },
  },
  plugins: [],
};
