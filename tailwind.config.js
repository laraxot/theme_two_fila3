import preset from '../../vendor/filament/support/tailwind.config.preset'



/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [preset],
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
        './app/Filament/Blocks/*.php',
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
