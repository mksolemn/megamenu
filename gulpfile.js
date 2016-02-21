var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    prefix = require('gulp-autoprefixer');


// Styles task
// Sass compile
gulp.task('styles',function(){
    return sass('scss/**/*.scss', {
        style: 'compressed'
    })
            .pipe(prefix('last 2 versions'))
            .pipe(gulp.dest('css/'));
});

// Watch task
// Watches JS
gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['styles']);
});


gulp.task('default', ['styles' , 'watch']);
