/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-red': '#0EA5E9', // Light Blue (Sky 500)
                'brand-black': '#111111',
                'neon-green': '#39FF14',
                'neon-pink': '#FF10F0',
                'neon-purple': '#B026FF',
                'neon-yellow': '#FAFF00',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Or similar modern font
                roboto: ['Roboto', 'sans-serif'],
                graffiti: ['"Permanent Marker"', 'cursive'],
                marker: ['"Permanent Marker"', 'cursive'],
            }
        },
    },
    plugins: [],
}
