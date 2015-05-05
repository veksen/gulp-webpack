var path = require('path');

var gulp   = require('gulp'),
	gutil  = require('gulp-util'),
	sass   = require('gulp-sass'),
	concat = require('gulp-concat'),
	bower  = require('gulp-bower'),
	jquery = require('jquery'),
	neat   = require('node-neat'),
	req    = require('require-dir'),
	paths  = require('./paths.js');

req( './tasks', { recurse: true } );

gulp.task('watch', function () {
	gulp.watch(paths.sass + '/**/*.scss', ['sass']);
});

gulp.task('default',function() {
	gulp.start(['bower', 'sass']);
});

gulp.task('bower', function() {
	return bower()
		.pipe(gulp.dest(paths.bower));
});

console.log(['styles'].concat(
	neat.includePaths,
	paths.bower + '/select2/src/scss'
));

gulp.task('sass', function () {
	//var cssFiles = [
	//	paths.sass + '/main.scss',
	//	paths.bower + '/select2/src/scss/*'
	//];
	//gulp.src(cssFiles)
	gulp.src(paths.sass + '/main.scss')
		.pipe(sass({
			includePaths:
				['styles'].concat(
					neat.includePaths
					//'/var/www/test-bourbon/bower_components/select2/src/scss'
					//paths.bower + '/select2/src/scss'
					//path.resolve(paths.base, 'bower_components/select2/src/scss')
				)
			//includePaths: path.resolve(paths.base, 'node_modules/select2')
		}))
		.pipe(gulp.dest(paths.css));
});
