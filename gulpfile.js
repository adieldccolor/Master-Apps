var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    out = require('gulp-out');


gulp.task('css', function(){
    return gulp.src('__apps/src/css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('__apps/css'));
});

gulp.task('js', function(){
    return gulp.src('__apps/src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('__apps/js'));
});

gulp.task('default', function(){
    gulp.run('css');
    gulp.run('js');
});
