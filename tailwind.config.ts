import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#811844",
          dark: "#561530",
          light: "#A33266",
        },
        base: {
          bg: "#ffffff",
          fg: "#0F0F14",
          muted: "#6B7280"
        }
      },
      boxShadow: {
        soft: "0 6px 24px rgba(17, 17, 17, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
