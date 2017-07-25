var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var runTimestamp = Math.round(Date.now()/1000);

var fontName = 'icons';

gulp.task('iconfont', function(){
  return gulp.src(['icons/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName
    }))
    .pipe(iconfont({
      fontName: fontName,
      prependUnicode: true,
      normalize: true,
      formats: ['ttf', 'eot', 'woff'],
      fontHeight: 1001,
      timestamp: runTimestamp,
    }))
    .on('glyphs', function(glyphs, options) {
    })
    .pipe(gulp.dest('fonts/'));
});
