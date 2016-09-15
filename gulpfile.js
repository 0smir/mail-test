var gulp = require('gulp'),
    sass = require('gulp-sass'),
    inky = require('inky'),
    inlineCss = require('gulp-inline-css'),
    inlinesource = require('gulp-inline-source');


//STYLES
gulp.task('styles', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

// CONVERTE INKY
// gulp.task('inky', function() {
//     return gulp.src('./templates/**/*.html')
//         .pipe(inky())
//         .pipe(gulp.dest('./dist'));
// });

//CONVERTE INKY
gulp.task('inky', ['styles'], function() {
    return gulp.src('./templates/**/*.html')
        .pipe(inlinesource())
        .pipe(inky())
        .pipe(inlineCss({
            preserveMediaQueries: true
        }))
        .pipe(gulp.dest('./dist'));
});

//WATCH
gulp.task('default',function() {
    gulp.watch(['./scss/*.scss', './templates/**/*.html'],['inky']);
});


// //CONVERTE INKY
// gulp.task('inky', function() {
//     return gulp.src('./templates/**/*.html')
//         .pipe(inky())
//         .pipe(gulp.dest('./dist'));
// });
//
// //INLINE CSS
// gulp.task('inline', function () {
//     return gulp.src('./dist/*.html')
//         .pipe(inlineCss())
//         .pipe(gulp.dest('./dist'));
// });
//
// gulp.task('default',function() {
//     gulp.watch('./scss/**/*.scss',['styles']);
//     gulp.watch('./templates/**/*.html',['inky']);
// });