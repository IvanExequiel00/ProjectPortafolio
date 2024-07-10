import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'custom-gradient': 'linear-gradient(90deg, rgba(65,48,77,1) 0%, rgba(33,28,34,1) 50%, rgba(65,48,77,1) 100%)',
      },
      fontFamily: {
        sans: ['Courier Prime', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
