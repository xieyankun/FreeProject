var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config').sass;
var handleErrors = require('../util/handleErrors');

gulp.task('sass', function(){
	return gulp.src(config.src)
		.pipe(sass())
        .on('error', handleErrors)
		.pipe(gulp.dest(config.dest))
});