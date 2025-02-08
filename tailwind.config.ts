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
        "primary-gradient": "var(--color-gradient)",
      },
      colors: {
        background: "var(--color-light)",
        foreground: "var(--color-dark)",
        "primary-gradient": "var(--color-gradient)",
        light: "var(--color-light)",
        dark: "var(--color-dark)",
        "dark-gray": "var(--color-dark-gray)",
        "light-gray": "var(--color-light-gray)",
        "davy-gray": "var(--color-davy-gray)",
        platinum: "var(--color-platinum)",
        silver: "var(--color-silver)",
        munsell: "var(--color-munsell)",
        "fern-green": "var(--color-fern)",
        "medium-sea-green": "var(--color-medium-sea-green)",
        card: {
          platinum: "var(--color-platinum)",
          silver: "var(--color-silver)",
          munsell: "var(--color-munsell)",
        },
        button: {
          border: "var(--color-light-gray)",
          stroke: "var(--color-platinum)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
