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
        // 디자인 시스템 색상
        primary: "#000000",
        secondary: {
          DEFAULT: "#858585",
          light: "#868686",
        },
        inactive: {
          DEFAULT: "#c2c2c2",
          light: "#a8a8a8",
        },
        keyword: "#6a6a6a",
        background: {
          DEFAULT: "#ffffff",
          gray: "#d9d9d9",
          light: "#e4e4e4",
          lighter: "#efefef",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      width: {
        // 디자인 시스템 너비
        "menu-width": "400px",
        "content-width": "1520px",
      },
      spacing: {
        // 디자인 시스템 간격 (margin, padding에도 사용 가능)
        "menu-width": "400px", // margin-left에도 사용
        "menu-padding": "46px",
        "card-padding": "60px",
      },
    },
  },
  plugins: [],
};
export default config;

