import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "hsl(223 calc(1 * 6.7%) 20.6% / 1)",
        tertiary: "hsl(225 calc(1 * 6.3%) 12.5% / 1)",
        accent: "hsl(227 calc(1 * 6.5%) 27.3% / 1)",
        "status-danger": "hsl(359 calc(1 * 87.3%) 59.8% / 1)",
        "header-primary": "hsl(220 calc(1 * 13%) 95.5% / 1)",
        "brand-experiment": "hsl(235 calc(1 * 85.6%) 64.7% / 1)",
        "modifier-accent": "hsl(228 calc(1 * 6%) 32.5% / 0.48)",
      },
      colors: {
        "white-500": "hsl(0 calc(1 * 0%) 100% / 1)",
        "green-360": "hsl(145 calc(1 * 65%) 39.2% / 1)",
      },
      boxShadow: {
        modifier: "0 2px 6px hsl(0 calc(1 * 0%) 0%) / 0.24)",
      },
    },
  },
  plugins: [],
};
// hsl(223 calc(1 * 6.7%) 20.6% / 1)
export default config;
