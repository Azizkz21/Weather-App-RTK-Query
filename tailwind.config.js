/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral900: "hsl(243, 96%, 9%)",
        neutral800: "hsl(243, 27%, 20%)",
        neutral700: "hsl(243, 23%, 24%)",
        neutral600: "hsl(243, 23%, 30%)",
        neutral300: "hsl(240, 6%, 70%)",
        neutral200: "hsl(250, 6%, 84%)",
        neutral100: "hsl(0, 0%, 100%)",
        orange500: "hsl(28, 100%, 52%)",
        blue500: "hsl(233, 67%, 56%)",
        blue700: "hsl(248, 70%, 36%)",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        heading: ["Bricolage Grotesque", "sans-serif"],
      },
      maxWidth: {
        "1440w": "1440px",
        "945w": "945px",
        "440w": "440px"
      },
      borderWidth: {
        "1p": "1px",
      },
      translate: {
        "-50": "-50%",
      },
      inset: {
        top110: "110%",
        top120: "120%",
      },
      width: {
        "160p": "160px",
      },
    },
  },
  plugins: [],
};
