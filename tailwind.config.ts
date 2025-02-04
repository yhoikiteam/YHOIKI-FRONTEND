import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        "geist-sans": [
          "var(--font-geist-sans)",
          ...defaultTheme.fontFamily.sans,
        ],
        "geist-mono": [
          "var(--font-geist-mono)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      backgroundImage: {
        "button-gradient": "linear-gradient(to right, #61BC71, #3CAB59)",
      },
      colors: {
        color1: "#75C57E",
        color2: "#34A853",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
