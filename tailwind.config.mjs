/** @type {import('tailwindcss').Config} */
import fluid, { extract, screens, fontSize } from "fluid-tailwind";
import typography from "@tailwindcss/typography";

export default {
  content: {
    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    fluid: ({ theme }) => ({
      defaultScreens: ["20rem", theme("screens.lg")],
    }),
    screens,
    fontSize,
    fontFamily: {
      mono: ["var(--font-jetbrains-mono)"],
      serif: ["var(--font-bricolage-serif)"],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    /** @type {import('tailwindcss/types/config').PluginCreator} */
    ({ addVariant }) => {
      addVariant("starting", "@starting-style");
    },
    typography,
    fluid,
  ],
};
