import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#150E24",
        surface: "#1E1533",
        surfaceAlt: "#271B44",
        border: "#34264F",
        primary: "#8B5CF6",
        secondary: "#F472B6",
        highlight: "#CFFF5C",
        ink: "#F6F3FF",
        muted: "#B6ACD9",
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
