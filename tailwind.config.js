import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import preset from '../../vendor/filament/support/tailwind.config.preset'


/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [preset],
    content: [
        './Resources/**/*.blade.php',
        './Resources/**/*.js',
        './Resources/**/*.vue',
        './Filament/Blocks/*.php',
        '../../resources/**/*.blade.php',
        '../../Resources/**/*.js',
        '../../Resources/**/*.vue',
        '../../app/Filament/Blocks/*.php',
        '../../vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        '../../storage/framework/views/*.php',
        '../../resources/views/**/*.blade.php',
        '../../vendor/awcodes/filament-curator/resources/**/*.blade.php',
        '../../app/Filament/**/*.php',
        '../../resources/views/filament/**/*.blade.php',
        '../../vendor/filament/**/*.blade.php',
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
