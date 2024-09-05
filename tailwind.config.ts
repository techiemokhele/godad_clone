import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: {
          1: "#111111",
        },
        white: {
          1: "#ffffff",
        },
        teal: {
          1: "#00838C",
          2: "#09757A",
        },
        cream: {
          1: "#FFFDDD",
          2: "#F3E5AB",
          3: "#F2D5AA",
          4: "#F2D09D",
        },
        pink: {
          1: "#FFD7D7",
          2: "#E0A2A2",
          3: "#A56C6C",
          4: "#915858",
        },
        purple: {
          1: "#CFA3EA",
          2: "#520380",
          3: "#3A025B",
        },
        gray: {
          1: "#D8EFEF",
          2: "#555555",
          3: "#333333",
          4: "#222222"
        },
      },
      text: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.75rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
