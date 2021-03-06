/*
 */

var gulp   = require('gulp');
var sass   = require('gulp-sass');
var concat = require('gulp-concat');
var rev    = require('gulp-rev');
var del    = require('del');

gulp.task('clean:css', function(cb) {
    del(['web/lib/css/all*.css'], cb);
});

// now that we have imported all our dependencies we can define our task:
gulp.task('compile', ['clean:css'], function () {
    gulp.src('src/*.scss')
        .pipe(concat('all.scss'))
        .pipe(sass())
        .pipe(rev())
        .pipe(gulp.dest('web/lib/css'));
});


// TASK: Watch
gulp.task('watch', function () {
    gulp.watch('src/*.scss', ['sass']);
});

// TASK: Build
gulp.task('build', [
    'compile'
]);

// TASK: Default
gulp.task('default', [
    'compile',
    'watch'
]);
