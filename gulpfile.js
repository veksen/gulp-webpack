var path = require('path');

var gulp  = require('gulp'),
	gutil = require('gulp-util'),
	sass  = require('gulp-sass'),
	concat = require('gulp-concat'),
	jquery = require('jquery'),
	neat = require('node-neat').includePaths,
	requireDir  = require('require-dir'),
	paths = require('./paths.js');

requireDir( './tasks', { recurse: true } );

gulp.task('watch', function () {
	gulp.watch(paths.sass + '/**/*.scss', ['sass']);
});

gulp.task('default',function() {
	gulp.start('sass');
});

//gulp.task('bower', function() {
//	return bower()
//		.pipe(gulp.dest(paths.bower));
//});

gulp.task('sass', function () {
	gulp.src(paths.sass + '/main.scss')
		.pipe(sass({
			includePaths: require('node-neat').includePaths
			//includePaths: path.resolve(paths.base, 'node_modules/select2')
		}))
		.pipe(gulp.dest(paths.css));
});

// gulp.task('javascript', function () {
//	return gulp.src(paths.js)
//		.pipe(concat('all.js'))
//		.pipe(gulp.dest('./dist/js'));
// });

//gulp.task('sass', function () {
//	return gulp.src(paths.sass)
//		.pipe(sass({
//			includePaths: ['styles'].concat(neat)
//		}))
//		.pipe(gulp.dest(paths.css));
//});

