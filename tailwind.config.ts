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
        "primary-gradient-r": "linear-gradient(to right, #61BC71, #3CAB59)",
        "primary-gradient-l": "linear-gradient(to right, #3CAB59, #61BC71)",
      },
      colors: {
        "gradient-r": "linear-gradient(to right, #61BC71, #3CAB59)",
        "gradient-l": "linear-gradient(to right, #3CAB59, #61BC71)",
        color1: "#75C57E",
        color2: "#34A853",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
