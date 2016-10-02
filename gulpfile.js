var gulp = require('gulp'),
    ava = require('gulp-ava');

gulp.task('scripts:test', function () {
    return gulp.src('test/**/*.test.js')
        .pipe(ava({
            verbose: true,
            nyc: true
        }));
});
