module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            red: {
                100: '#E0565F',
                200: '#CD343E',
            },
            green: {
                100: '#93C497',
            },
            yellow: {
                100: '#FFDFA7',
                200: '#E5A024',
            },
            blue: {
                100: '#424152',
            },
            black: {
                100: '#141416',
                200: '#212121',
            },
            grey: {
                100: '#E5E5E5',
                200: '#9E9E9E',
                300: '#585858',
            },
            white: {
                100: '#ffffff',
                200: '#F6F6F6',
            },
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
