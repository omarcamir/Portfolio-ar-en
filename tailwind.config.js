/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "#FA5D36",
        "white-color": "#FBFBFB",
        "overlay-bg-1": "#2A2B30",
        "overlay-bg-2": "#2D2E33",
        "line-color": "#696969",
        "blank-color": "#D9D9D9",
        "text-color": "#C2C2C2",
      },
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        NotoSansArabic: ['var(--font-NotoSansArabic)'],
      },
      fontSize: {
        "h1": ["80px", "auto"],
        "h2": ["64px", "auto"],
        "h3": ["48px", "auto"],
        "h4": ["24px", "auto"],
        "h5": ["19px", "auto"],
        "h6": ["16px", "auto"],
        "body": ["16px", "auto"],
        "text-button": ["16px", "auto"],
        "number-1": ["120px", "auto"],
        "number-2": ["56px", "auto"],
        "pricing": ["32px", "auto"],
        "error-404": ["560px", "auto"],
        "background-text": ["240px", "auto"],
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
  },
  plugins: [],
  important: true,
};
