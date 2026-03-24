// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "#6366f1", // Indigo
        secondary: "#06b6d4", // Cyan
      },
      // --- MAGIC UI ANIMATIONS START ---
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      // --- MAGIC UI ANIMATIONS END ---
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;