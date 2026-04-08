import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#08090a",
        ivory: "#0f1011",
        terra: "#5e6ad2",
        coral: "#7170ff",
        sand: "#23252a",
        cream: "#1a1b1f",
        charcoal: "#d0d6e0",
        olive: "#8a8f98",
        stone: "#62666d",
        near_black: "#f7f8f8",
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
