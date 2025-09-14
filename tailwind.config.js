/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,css}",
    "./app/**/*.{js,ts,jsx,tsx,css}",
    "./components/**/*.{js,ts,jsx,tsx,css}",
    "./modules/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-img": "url('/images/home-img.jpg')",
      },
      keyframes: {
        appear: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        slide: {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        appear: "appear 1s ease-in-out",
        slide: "slide 750ms ease-in-out",
      },
    },
  },
  plugins: [],
};
