import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#101010',
        'primary': '#FFFFFF',
        'secondary': '#B3B3B3',
        'accent': {
          'DEFAULT': '#A855F7',
          'glow': 'rgba(168, 85, 247, 0.5)',
        },
        'highlight': '#EC4899',
        'muted': '#333333',
        "blush-pink": "#F8E1F4",
        "lavender-mist": "#D8B4E2",
        "soft-white": "#FFFFFF",
        "accent-start": "#A855F7",
        "accent-end": "#EC4899",
        "gray-light": "#F3F4F6",
        "gray-medium": "#9CA3AF",
        "gray-dark": "#374151",
        "pink-vibrant": "#EC4899",
        "purple-deep": "#7E22CE",
        'gold': '#FFD700',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
        lifted: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        glow: "0 0 20px 0px rgba(168, 85, 247, 0.5)",
        'deep-glow': "0 0 40px 10px rgba(168, 85, 247, 0.3)",
      },
      backgroundImage: {
        'noise': "url('/noise.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
export default config;
