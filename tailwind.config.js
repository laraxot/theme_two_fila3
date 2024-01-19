/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './Resources/**/*.blade.php',
        './Resources/**/*.js',
        './Resources/**/*.vue',
        './Filament/Blocks/*.php',
        '../../resources/**/*.blade.php',
        '../../Resources/**/*.js',
        '../../Resources/**/*.vue',
        '../../app/Filament/Blocks/*.php'
    ],
    theme: {
        extend: {
            maxWidth: {
                'wide': '1200px',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
};
