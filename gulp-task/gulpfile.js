const htmlmin = require('gulp-htmlmin');
const { src ,dest, series, parallel,watch} = require('gulp');
const minJs=require("gulp-terser");
const concat = require("gulp-concat");
function Htmlmin(){
    return src("project/*.html")
    .pipe(htmlmin({ collapseWhitespace: true ,
        removeComments:true}))
        .pipe(dest("dist"));
}
exports.html=Htmlmin;
function JSMinfy() {
    return src("project/js/*.js").pipe(concat("script.js"))
    .pipe(minJs())
    .pipe(dest("dist/js"));
  }
  exports.js=JSMinfy;
const imgMin=require("gulp-imagemin");
function imgsMinify() {
  return src("project/Images/*")
  .pipe(imgMin())
  .pipe(dest("dist/Images"));
}
exports.img=imgsMinify;
const cssMin=require("gulp-clean-css");
function cssMinfy() {
  return src("project/Css/**/*.css").pipe(concat("style.css"))
  .pipe(cssMin()).pipe(dest("dist/css"));
}
exports.css=cssMinfy;

function watchTask() {
  watch(["project/css/**/*.css","project/*.html","project/js/*.js"],{interval:1000}, parallel(cssMinfy,Htmlmin,JSMinfy,imgsMinify));
}
exports.default=series(parallel(JSMinfy,cssMinfy,imgsMinify,Htmlmin),watchTask);
// var gulp = require('gulp');
// var concat = require('gulp-concat');
// var prefix = require('gulp-autoprefixer');
// // var sass= require('gulp-sass');
// gulp.task('css', function () {
//     return gulp.src('project/*.css')
//         .pipe(prefix())
//         .pipe(concat('style.css'))
//         .pipe(gulp.dest('dist'))
        
// });
// gulp.task('js', function () {
//     return gulp.src('project/*.js')
//         .pipe(concat('script.js'))
//         .pipe(gulp.dest('dist'))
// });
// gulp.task('html', function () {
//     return gulp.src('project/*.html')
//         .pipe(concat('main.html'))
//         .pipe(gulp.dest('dist'))
// });
// gulp.task('watch',function(){
//     require('./server.js');
//     gulp.watch('project/day4.html',['html']);
// });


