import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#FFF8EC",
        ink: "#2B1B12",
        muted: "#6B5A48",
        border: "#EAD9C0",

        surface: "#241A10",
        surfaceAlt: "#2E2115",
        cardBorder: "#3A2A18",
        cardInk: "#FFF6EC",
        cardMuted: "#E0C7A8",

        primary: "#FF7A29",
        secondary: "#FF4D6D",
        highlight: "#fc5502",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
