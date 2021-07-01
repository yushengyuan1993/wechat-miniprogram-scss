const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const changed = require('gulp-changed');
const watcher = require('gulp-watch');

// 自动监听
gulp.task('default', gulp.series(function() {
  watcher('./pages/**/*.scss', function(){
    miniSass();
  });
}));

// 手动编译
gulp.task('init', function(){
  miniSass();
});

function miniSass(){
  return gulp.src('./pages/**/*.scss')//需要编译的文件
    .pipe(sass({
      outputStyle: 'expanded'//展开输出方式 expanded
     }))
     .pipe(rename((path)=> {
      path.extname = '.wxss'
    }))
    .pipe(changed('./pages')) //只编译改动的文件
    .pipe(gulp.dest('./pages')) //编译
    .pipe(rename((path)=> {
      console.log(`编译完成文件：'pages/${path.dirname}/${path.basename}.scss'`)
    }))
}