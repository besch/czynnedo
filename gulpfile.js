var gulp        = require('gulp'),
    bower       = require('gulp-bower');
    browserify  = require('gulp-browserify'),
    reload      = require('browser-sync');


gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('lib/'))
});


gulp.task('browserify', function () {
  return gulp.src(path.baseJs)
    .pipe(browserify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest(path.destJs))
    .pipe(reload.stream());
});


gulp.task('reload', function () {

  var files = [
    'public/**/*.html',
    'public/assets/css/**/*.{css,less}',
    'public/assets/js/**/*.js'
  ];

  reload.init(files, {
    server: {
      baseDir: './public'
    }
  });
});