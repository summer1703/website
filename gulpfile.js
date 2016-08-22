"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourceMaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var jst = require('gulp-excalibur-jst')

gulp.task('default', ['serve'], function(){
    console.log('init')
});

gulp.task('sass', function(){
    return gulp.src('src/**/*.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            expand: true
        }).on('error', sass.logError))
        .pipe(sourceMaps.write('./maps'))
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.stream())
});

gulp.task('serve', ['sass'], function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch("src/**/*.scss", ['sass']);
    gulp.watch("src/**/*.html").on("change", browserSync.reload)
});

gulp.task('jst', function(){
    gulp.src('src/**/*.jst.html')
        .pipe(jst({
            prettify: true
        }))
        .pipe(gulp.dest('src'))
});