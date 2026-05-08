import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        linen: "#f6efe6",
        porcelain: "#fbf8f2",
        oat: "#e7d8c4",
        taupe: "#a48268",
        espresso: "#4d3d34",
        charcoal: "#242321",
        smoke: "#73706a",
        sage: "#7d8a75",
        oxblood: "#7b3e38"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 24px 60px rgba(47, 40, 34, 0.12)",
        card: "0 14px 34px rgba(65, 52, 42, 0.10)"
      },
      borderRadius: {
        fashion: "22px"
      }
    }
  },
  plugins: []
};

export default config;
