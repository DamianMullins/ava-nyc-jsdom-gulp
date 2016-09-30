var gulp = require('gulp'),
    ava = require('gulp-ava');

gulp.task('default', function () {
    return gulp.src('test.js')
        .pipe(ava({
            verbose: true,
            nyc: true
        }));
});
