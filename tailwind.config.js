/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        prime: "var(--prime-color)",
        second: "var(--second-color)",
      },
      borderRadius: {
        big: "var(--border-big)",
        small: "var(--border-small)",
      },
      fontFamily: {
        josefin: "var(--font-josefin)",
        milonga: "var(--font-milonga)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
