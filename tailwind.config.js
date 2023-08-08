/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                /* Go for around 3 to 5 primary colors [have shades for each color instead] */
                'blue-dark': ' #041562',
                'blue-medium': '#11468F',
                'red-medium': '#DA1212',
                'red-light': '#E74646',
                'red-dark': '#C51605',
                'grey-light': '#EEEEEE',
            },
            backgroundImage: {
                'home-bg': "url('./assets/YIWImage2022.jpeg')",
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                raleway: ['Raleway', 'sans-serif'],
                figtree: ['Figtree', 'sans-serif'],
            },
            content: {
                evolvetext: "url('./assets/EvolveText.png')",
                abstractwaves: "url('./assets/AbstractWaves.png')",
                sparkles: "url('./assets/Sparkles.png')",
                circles: "url('./assets/Circles.png')",
            },
        },
        screens: {
            xs: '480px',
            sm: '768px',
            md: '1060px',
        },
    },
    plugins: [],
});
