import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Karena cuman pakai 1 font, kita tidak perlu taruh di extend
    fontFamily: {
      sans: ["var(--font-rubik)"],
    },
    // Karena hanya warna berikut yang akan dipakai, kita tidak perlu taruh di extend
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      background: {
        light: "#f8fafb",
        DEFAULT: "#f8fafb",
        dark: "#e8ecef",
      },
      primary: {
        light: "#4d7cfe",
        DEFAULT: "#4d7cfe",
        dark: "#252631",
      },
      secondary: {
        light: "#778ca2",
        DEFAULT: "#778ca2",
        dark: "#98a9bc",
      },
      yellow: "#ffab2b",
      green: "#6dd230",
      pink: "#fe4d97",
      cyan: "#2ce5f6",
    },
  },
  plugins: [],
} satisfies Config;
