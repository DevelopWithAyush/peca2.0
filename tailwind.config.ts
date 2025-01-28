import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700",
        border: "#9966CC",
        background: "#4B0082",
        secondary: "#705CFE",
        text: "#F5F5F5",
        "dark-text": "#1E1E1E",
        green: "#55A330",
        red:"#D80606"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        "grandstander-thin_100": ["Grandstander-Thin", "sans-serif"],
        "grandstander-thinitalic_100i": [
          "Grandstander-ThinItalic",
          "sans-serif",
        ],
        "grandstander-extralight_200": [
          "Grandstander-ExtraLight",
          "sans-serif",
        ],
        "grandstander-extralightitalic_200i": [
          "Grandstander-ExtraLightItalic",
          "sans-serif",
        ],
        "grandstander-light_300": ["Grandstander-Light", "sans-serif"],
        "grandstander-lightitalic_300i": [
          "Grandstander-LightItalic",
          "sans-serif",
        ],
        "grandstander-regular_400": ["Grandstander-Regular", "sans-serif"],
        "grandstander-regularitalic_400i": [
          "Grandstander-RegularItalic",
          "sans-serif",
        ],
        "grandstander-medium_500": ["Grandstander-Medium", "sans-serif"],
        "grandstander-mediumitalic_500i": [
          "Grandstander-MediumItalic",
          "sans-serif",
        ],
        "grandstander-semibold_600": ["Grandstander-SemiBold", "sans-serif"],
        "grandstander-semibolditalic_600i": [
          "Grandstander-SemiBoldItalic",
          "sans-serif",
        ],
        "grandstander-bold_700": ["Grandstander-Bold", "sans-serif"],
        "grandstander-bolditalic_700i": [
          "Grandstander-BoldItalic",
          "sans-serif",
        ],
        "grandstander-extrabold_800": ["Grandstander-ExtraBold", "sans-serif"],
        "grandstander-extrabolditalic_800i": [
          "Grandstander-ExtraBoldItalic",
          "sans-serif",
        ],
        "grandstander-black_900": ["Grandstander-Black", "sans-serif"],
        "grandstander-blackitalic_900i": [
          "Grandstander-BlackItalic",
          "sans-serif",
        ],
      },
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
