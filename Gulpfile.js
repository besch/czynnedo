// var basePath = 'public',
//     destPath = 'dist';

// var path = {
//   baseHtml: basePath + '/*.html',
//   baseCss:  basePath + '/assets/css/**/*.less',
//   baseJs:   basePath + '/assets/js/**/*.js',
//   baseImg:  basePath + '/assets/img/**/*.+(png|jpeg|jpg|svg)',
//   destCss:  destPath + '/css',
//   destJs:   destPath + '/js',
//   destImg:  destPath + '/img'
// };

var gulp        = require('gulp'),
  // copy          = require('gulp-copy'),
  // browserify    = require('gulp-browserify'),
  less          = require('gulp-less'),
  // concat        = require('gulp-concat'),
  autoprefixer  = require('gulp-autoprefixer'),
  // livereload    = require('gulp-livereload'),
  // watch         = require('gulp-watch');
  reload        = require('browser-sync');

// gulp.task('copy-html', function () {
//   return gulp.src(path.baseHtml)
//     .pipe(copy(destPath))
//     .pipe(reload.stream());
// });

// gulp.task('copy-img', function () {
//   return gulp.src(path.baseImg)
//     .pipe(copy(path.destImg))
//     .pipe(reload.stream());
// });

// gulp.task('less', function () {
//   return gulp.src(path.baseCss)
//     .pipe(less())
//     .pipe(autoprefixer({
//       browsers: ['last 2 versions']
//     }))
//     .pipe(gulp.dest(path.destCss))
//     .pipe(reload.stream());
// });

// gulp.task('browserify', function () {
//   return gulp.src(path.baseJs)
//     .pipe(browserify())
//     .pipe(concat('main.js'))
//     .pipe(gulp.dest(path.destJs))
//     .pipe(reload.stream());
// });

// gulp.task('serve', ['copy-html', 'copy-img', 'less', 'browserify'], function () {
//   var files = [path.baseCss, path.baseJs];

//   reload({
//     files: files,
//     server: {
//       baseDir: './'
//     }
//   });

//   gulp.watch(path.baseJs, ['copy-html']);
//   gulp.watch(path.baseJs, ['copy-img']);
//   gulp.watch(path.baseJs, ['browserify']);
//   gulp.watch(path.baseCss, ['less']);
// });

// gulp.task('default', ['serve']);







gulp.task('lessTask', function () {
  return gulp.src('client/assets/css/less/base.less')
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('client/assets/css'));
});



// Compile less only with browser-sync and run server
gulp.task('default', ['lessTask'], function () {
  gulp.watch('client/assets/css/less/**/*.less', ['lessTask']);

  var files = [
    'client/**/*.html',
    'client/assets/css/**/*.{css,less}',
    'client/assets/js/**/*.js'
  ];

  reload.init(files, {
    server: {
      baseDir: './client'
    },
    port: 5000
  });
});