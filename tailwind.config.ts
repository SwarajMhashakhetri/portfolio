import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        unitedSans: ["var(--font-unitedSans)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderColor: {
        primary: "#aacfd1",
      },
      colors: {
        border: "#4D6062",
        secondary: "#2B3538",
        primary: "#aacfd1",
        selected: "#A8CED0",
      },
    },
  },
  plugins: [],
};
export default config;
