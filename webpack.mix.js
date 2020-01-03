const mix = require('laravel-mix');
const { externals, resolve, plugins } = require('./webpack.config.js')

mix.webpackConfig({
    externals,
    resolve,
    plugins
})

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/vue/src/app.js', 'public/js')
    .sass('resources/assets/vue/sass/app.scss', 'public/css');
