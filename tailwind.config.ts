import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#F5F4ED",
        ivory: "#FDFCF8",
        terra: "#C96442",
        coral: "#D97757",
        sand: "#E8E6DC",
        cream: "#F0EEE6",
        charcoal: "#4D4C48",
        olive: "#5E5D59",
        stone: "#87867F",
        near_black: "#141413",
      },
      fontFamily: {
        sans: ["'Pretendard Variable'", "Inter", "-apple-system", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
      },
      maxWidth: {
        content: "1080px",
      },
    },
  },
  plugins: [],
};
export default config;
