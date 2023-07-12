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
          'outline-hover': 'var(--color-fill)',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'button-primary': 'var(--color-button-primary)',
          'button-primary-hover': 'var(--color-button-primary-hover)',
          'button-secondary': 'var(--color-button-secondary)',
          'button-outline': 'var(--color-button-outline)',
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
