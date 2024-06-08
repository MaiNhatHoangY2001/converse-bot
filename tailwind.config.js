/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "--primary-color",
        "secondary-color": "--secondary-color",
        "text-color": "--text-color",
        "background-color": "--background-color",
        "accent-color": "--accent-color",
        "accent-color2": "--accent-color2",
        "accent-color3": "--accent-color3",
        "accent-color4": "--accent-color4",
        "static-color": "--static-color",
      },
    },
  },
  plugins: [],
};
