import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4f7ff",
          100: "#e7eeff",
          500: "#335cff",
          700: "#1f3fc7",
          900: "#12256e"
        }
      }
    }
  },
  plugins: []
};

export default config;
