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
        secondary: "hsl(220 calc(1 * 6.5%) 18% / 1)",
        tertiary: "hsl(225 calc(1 * 6.3%) 12.5% / 1)",
        accent: "hsl(227 calc(1 * 6.5%) 27.3% / 1)",
        floating: "hsl(220 calc(1 * 8.1%) 7.3% / 1)",
        "status-danger": "hsl(359 calc(1 * 87.3%) 59.8% / 1)",
        "header-primary": "hsl(220 calc(1 * 13%) 95.5% / 1)",
        "brand-experiment": "hsl(235 calc(1 * 85.6%) 64.7% / 1)",
        "modifier-accent": "hsl(228 calc(1 * 6%) 32.5% / 0.48)",
        "modifier-selected": "hsl(228 calc(1 * 6%) 32.5% / 0.6)",
        "secondary-alt": "hsl(228 calc(1 * 6.7%) 14.7% / 1)",
        "interactive-active": "hsl(0 calc(1 * 0%) 100% / 1)",
      },
      backgroundImage: {
        banner: "linear-gradient(to bottom, hsl(0 calc(1 * 0%) 0% / 0.4) 0%, transparent 100%)",
        modifier:
          "linear-gradient(to top, transparent, transparent 1px, transparent 1px, transparent calc(1px + 1px), transparent calc(1px + 1px))",
        "header-bar": "linear-gradient(to right, rgba(54,57,63,0) 0%, hsl(223 calc(1 * 6.7%) 20.6% / 1) 100%)",
        "progress-bar": "linear-gradient(to right, hsl(221 calc(1 * 70%) 55.5% / 1), hsl(269 calc(1 * 83.8%) 71% / 1))",
      },
      colors: {
        muted: "hsl(214 calc(1 * 8.1%) 61.2% / 1)",
        normal: "hsl(210 calc(1 * 9.1%) 87.1% / 1)",
        positive: "hsl(146 calc(1 * 63.1%) 47.8% / 1)",
        link: "hsl(200 calc(1 * 100%) 49.4% / 1)",
        "white-500": "hsl(0 calc(1 * 0%) 100% / 1)",
        "green-360": "hsl(145 calc(1 * 65%) 39.2% / 1)",
        "interactive-normal": "hsl(215 calc(1 * 8.8%) 73.3% / 1)",
        "header-primary": "hsl(220 calc(1 * 13%) 95.5% / 1)",
        "channel-icon": "hsl(223 calc(1 * 5.8%) 52.9% / 1)",
        "modifier-accent": "hsl(228 calc(1 * 6%) 32.5% / 0.48)",
        "input-border": "hsl(0 calc(1 * 0%) 0% / 0.3)",
        "input-placeholder": "hsl(216 calc(1 * 2.1%) 53.9% / 1)",
      },
      boxShadow: {
        modifier: "0 2px 6px hsl(0 calc(1 * 0%) 0%) / 0.24)",
        "elevation-low":
          "0 1px 0 hsl(0 calc(1 * 0%) 0.8% / 0.2), 0 1.5px 0 hsl(240 calc(1 * 7.7%) 2.5% / 0.05), 0 2px 0 hsl(0 calc(1 * 0%) 0.8% / 0.05)",
        "elevation-high": "0 8px 16px hsl(0 calc(1 * 0%) 0% / 0.24)",
      },
      width: {
        "progress-bar": "calc(100% - 20px)",
      },
    },
  },
  plugins: [],
};
// hsl(223 calc(1 * 6.7%) 20.6% / 1)
export default config;
