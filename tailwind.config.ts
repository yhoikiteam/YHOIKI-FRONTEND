import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
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
        gainsboro: "#D9D9D9",
        "primary-one": "var(--color-fern)",
        "primary-two": "var(--color-primary-two)",
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
