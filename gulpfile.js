var gulp = require('gulp');
var react = require('gulp-react');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 9000
    }));
});

gulp.task('react', function() {
  return gulp.src('./jsx/**/*.jsx')
    .pipe(react())
    .pipe(gulp.dest('js'));
});

gulp.task('watch', ['react', 'webserver'], function() {
  gulp.watch(['jsx/**/*.jsx'], ['react']);
});
