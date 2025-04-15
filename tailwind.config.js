/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#90EE90',
        'gray-light': '#f5f5f5',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        pulsate: {
          '0%, 100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 0.5,
            transform: 'scale(1.1)',
          },
        },
        ripple: {
          '0%': {
            opacity: 0,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 0.3,
          },
          '100%': {
            opacity: 0,
            transform: 'scale(1.5)',
          },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulsate': 'pulsate 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ripple-1': 'ripple 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ripple-2': 'ripple 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 0.5s',
        'ripple-3': 'ripple 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} 