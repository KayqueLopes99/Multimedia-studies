import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'github-bg': '#0d1117',
        'github-card': '#161b22',
        'github-accent': '#58a6ff',
        'github-text': '#c9d1d9',
        'github-subtext': '#8b949e',
        'github-border': '#30363d',
        'github-inner': '#1c2128',
      },
    },
  },
  plugins: [],
};
export default config;