import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C3592D",
        secondary: "#556A3B",
        background: {
          primary: "#FFFFFF",
          secondary: "#FEF5F0",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        serif: ["var(--font-poly)", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        xs: "0.5rem", // 10px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.5rem", // 24px
        "2xl": "2rem", // 32px
        "3xl": "3rem", // 48px
      },
    },
  },
  plugins: [],
};
export default config;

