/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            gold: "#EBA526",
            white: "#FFFFFF",
            black: "#000000",
            brown: "#302926",
            gray: "#E6E6E6",
            red: "#991b1b",
        },
        extend: {
            fontFamily: {
                sans: ["Lato", "Puritan", "Roboto Flex"],
                handwritten: ["Gloria Hallelujah"],
            },
            boxShadow: {
                "button-hovered": "0px 4px 4px 0px #EBA52640",
                "button-active": "0px 4px 4px 0px #30292640 inset",
            },
        },
    },
    plugins: [],
};
