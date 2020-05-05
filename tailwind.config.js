module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./public/index.html", "./src/**/*.svelte"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
