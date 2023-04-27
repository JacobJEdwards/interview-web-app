/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: ["light", "dark"],
    },
};
