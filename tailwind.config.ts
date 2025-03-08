import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        ternary: "var(--ternary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "primary-gradient": "var(--primary-gradient)",
      },
      spacing: {
        'big-s': 'var(--space-big-s)',
        'big-m': 'var(--space-big-m)',
        'big-l': 'var(--space-big-l)',
        'big-xl': 'var(--space-big-xl)',
        'little-xxs': 'var(--space-little-xxs)',
        'little-xs': 'var(--space-little-xs)',
        'little-s': 'var(--space-little-s)',
        'little-m': 'var(--space-little-m)',
        'little-l': 'var(--space-little-l)',
        'little-xl': 'var(--space-little-xl)',
        'little-xxl': 'var(--space-little-xxl)',
      },
      fontSize: {
        'text-s': 'var(--text-s)',
        'text-m': 'var(--text-m)',
        'subtitle-s': 'var(--subtitle-s)',
        'subtitle-m': 'var(--subtitle-m)',
        'title-s': 'var(--title-s)',
        'title-m': 'var(--title-m)',
        'title-l': 'var(--title-l)',
        'title-xl': 'var(--title-xl)',
      },
    },
  },
  plugins: [],
} satisfies Config;
