/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "text-color": "var(--text-color)",
        "background-color": "var(--background-color)",
        "accent-color": "var(--accent-color)",
        "accent-color2": "var(--accent-color2)",
        "accent-color3": "var(--accent-color3)",
        "accent-color4": "var(--accent-color4)",
        "static-color": "var(--static-color)",
      },
    },
  },
  plugins: [],
};
