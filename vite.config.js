import { defineConfig } from 'vite';
import {laravel,  refreshPaths } from 'laravel-vite-plugin'
//import laravel from 'laravel-vite-plugin';

export default defineConfig({
    build: {
        // outDir: __dirname + '/Resources/dist',
        outDir: './Resources/dist',
        emptyOutDir: false,
        manifest: true,
        rollupOptions: {
            output: {
              entryFileNames: `assets/[name].js`,
              chunkFileNames: `assets/[name].js`,
              assetFileNames: `assets/[name].[ext]`
            }
          }
    },
    plugins: [
        laravel({
           // publicDirectory: '../../public',
           // buildDirectory: 'build-two',
            input: [
               // __dirname + '/Resources/css/filament/admin/theme.css',
                __dirname + '/Resources/css/app.css',
                __dirname + '/Resources/js/app.js',
            ],
            refresh: [
                 ...refreshPaths,
                'app/Livewire/**',
            ],
        }),
    ],
});

//export const paths = [
//    'Modules/$STUDLY_NAME$/resources/assets/sass/app.scss',
//    'Modules/$STUDLY_NAME$/resources/assets/js/app.js',
//];
