var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babel = require('gulp-babel');
var babelify = require('babel');
var reactify = require('reactify');

var config = {
  clientScripts: {
    src: 'app/client/index.jsx',
    dest: 'dist/static',
  },
  serverScripts: {
    src: ['app/index.js', 'app/**/*.{js,jsx}', '!app/{client,client/**}'],
    dest: 'dist/',
  },
  testScripts: {
    src: ['test/**/*.{js,jsx}'],
    dest: 'dist/test/'
  },
};

gulp.task('default', Object.keys(config));

gulp.task('watch', ['default'], function () {
  Object.keys(config).forEach(function (key) {
    gulp.watch(config[key].src, [key]);
  });
});

gulp.task('clientScripts', function () {
  bundle(config.clientScripts.src)
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.clientScripts.dest));
});

gulp.task('serverScripts', release(config.serverScripts.src, config.serverScripts.dest));
gulp.task('testScripts', release(config.testScripts.src, config.testScripts.dest));

function release (src, dest) {
  return function () {
    gulp.src(src)
        .pipe(babel({ stage: 0 }))
        .pipe(gulp.dest(dest));
  }
}

function bundle (src) {
  var b = browserify(src, {
    extensions: ['.jsx'],
  });

  b.transform('babelify', { stage: 0 });
  b.transform('reactify');

  return b.bundle();
}
