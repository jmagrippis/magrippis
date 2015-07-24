var gulp = require('gulp');
var elixir = require('laravel-elixir');

elixir.extend('angular', function() {

    gulp.task('angular-templates', function() {
        gulp.src('resources/assets/js/angular/**/*.html')
            .pipe(gulp.dest('public/angular'));
    });

    this.registerWatcher('angular-templates', 'resources/assets/js/angular/**/*.html');

    return this.queueTask('angular-templates');

});