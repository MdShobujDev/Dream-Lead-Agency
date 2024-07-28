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
        centra: ["var(--font-centra)"],
      },
      colors: {
        primary: "#02deab",
        secondary: "#F9BE00",
        tertiary: "#004AAD",
        primaryText: "#191E3B",
      },
    },
  },
  plugins: [],
};
export default config;
