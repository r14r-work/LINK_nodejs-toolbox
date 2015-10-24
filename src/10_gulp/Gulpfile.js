gulp.task('sass', function(done) {
    gulp.src('./scss/ionic.app.scss')
    .pipe(bulkSass())
    .pipe(sass({
        compass: true,
        errLogToConsole:true
        }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});
