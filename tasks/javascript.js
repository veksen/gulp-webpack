var gulp = require('gulp');
var webpack = require('gulp-webpack');
var paths = require('../paths.js');
var path = require('path');
var named = require('vinyl-named');
var uglify = require('gulp-uglify');

var config = {
	resolve: {
		root: [
			path.resolve(paths.base, 'node_modules'),
			path.resolve(paths.base, paths.js)
		]
	},
	output: {
		filename: 'main.js'
	},
	publicPath: path.resolve(paths.base, paths.js)
};

var sourceFile = path.resolve(paths.js, 'main.js');
var distPath = path.resolve(paths.base, paths.jsDist);


gulp.task('javascript', function() {
	return gulp.src(sourceFile)
		.pipe(named())
		.pipe(webpack(config))
		//.pipe(uglify())
		.pipe(gulp.dest(distPath));
});