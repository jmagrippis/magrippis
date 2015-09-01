var elixir = require('laravel-elixir');

require('./elixir-extensions.js');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.copy('node_modules/font-awesome/fonts', 'public/build/assets/fonts')
        .copy('resources/assets/js/angular/**/*.html', 'public/angular')
        .angular()
        .styles(['angular-material/angular-material.min.css'], 'resources/assets/css/vendor.css', 'node_modules')
        .sass('magrippis.scss', 'resources/assets/css/magrippis.css')
        .styles(['vendor.css', 'magrippis.css'], 'public/assets/css/magrippis.css')
        .browserify('angular/app.js', 'public/assets/js')
        .version(['assets/js/bundle.js', 'assets/css/magrippis.css']);
});
