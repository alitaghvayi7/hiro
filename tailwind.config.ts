/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        blue: {
          "02": "#100b30",
        },
        write: {
          "green": "#39D0A3",
          "red": "#CD3732",
          "blue": "#2F88FF",
          "stroke": '#F1F4F9'
        },
        stroke: {
          "03": '#fafafa',
          "02": '#eeeeee',
          "01": '#f6f6f6',
        },
        black: {
          "05": "#cccccc",
          "04": "#bdbdbd",
          "03": "#7d7d7d",
          "02": "#535353",
          "01": "#313131",
        },
      },
      fontSize: {
        "10px": [
          "0.625rem",
          {
            lineHeight: "1.1875rem"
          },
        ],
        "12px": [
          "0.75rem",
          {
            lineHeight: "1.1875rem",
          },
        ],
        "14px": [
          "0.875rem",
          {
            lineHeight: "1.4375rem",
          },
        ],
        "16px": [
          "1rem",
          {
            lineHeight: "1.6875rem",
          },
        ],
        "20px": [
          "1.25rem",
          {
            lineHeight: "2rem",
          },
        ],
        "25px": [
          "1.5625rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        "32px": [
          "2rem",
          {
            lineHeight: "3.25rem",
          },
        ],
      },
      keyframes: {
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}