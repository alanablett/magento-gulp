/**
 * Required modules (pulled in from package.json file by doing
 * 'npm install' from the command line)
 */
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var prefixer = require('gulp-autoprefixer');
var browserify = require('gulp-browserify');
var livereload = require('gulp-livereload');

/**
 * Source Files
 */
var sourceAssetsDirectory = './assets';
var sourceCssDirectory = sourceAssetsDirectory + '/css';
var sourceMainCssFile = sourceCssDirectory + '/main.scss';
var sourceJsDirectory = sourceAssetsDirectory + '/js';
var sourceMainJsFile = sourceJsDirectory + '/main.js';

/**
 * Destination Files
 */
var destinationDir = './httpdocs/skin/frontend/themename/default';
var destinationCssDirectory = destinationDir + '/css';
var destinationJsDirectory = destinationDir + '/js';

/**
 * Pass our css through sass and auto prefixer
 */
gulp.task('css', function(){
    gulp.src(sourceMainCssFile)
        .pipe(sass()).on('error', gutil.log)
        .pipe(prefixer('last 10 version')).on('error', gutil.log)
        .pipe(gulp.dest(destinationCssDirectory))
});

/**
 * Pass our js through browserify
 */
gulp.task('js', function(){
    gulp.src(sourceMainJsFile)
    	.pipe(browserify()).on('error', gutil.log)
        .pipe(gulp.dest(destinationJsDirectory))
});

/**
 * Set up our watcher tasks. This in turn will fire off the associated tasks
 * when it sees a file has been changed.
 */
gulp.task('watch', function(){
    livereload.listen();
    gulp.watch(sourceCssDirectory + '/***/*.scss', ['css']).on('change', livereload.changed);
    gulp.watch(sourceJsDirectory +  '/***/*.js', ['js']).on('change', livereload.changed);
});

/**
 * Set a default task. This allows us to run 'gulp' from the command line and it will
 * assume we want to run the watch task. Otherwise we would have to run 'gulp watch'
 */
gulp.task('default', ['watch']);