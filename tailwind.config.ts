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
        primary: "#6D9EEB", /* Softer blue */
        "primary-light": "#A4C2F4", /* Pastel light blue */
        secondary: "#FFBF69", /* Soft orange */
        accent: "#8ED1A8", /* Pastel green */
        background: "#F8F9FA", /* Slightly warmer white */
        surface: "#FFFFFF",
        "surface-elevated": "rgba(255, 255, 255, 0.85)",
        "text-primary": "#2D3748", /* Softer than black */
        "text-secondary": "#718096", /* Medium gray with slight blue tint */
        "text-tertiary": "#A0AEC0", /* Light gray with slight blue tint */
      },
      fontFamily: {
        display: ['"SF Pro Display"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #F0F4FF 0%, #FFEFD5 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
        'gradient-soft': 'linear-gradient(135deg, #E6F0FF 0%, #F8F9FA 100%)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '10px',
        'lg': '16px',
      },
    },
  },
  plugins: [],
};
export default config;
