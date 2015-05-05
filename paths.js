var path = require('path');

var paths = {
	sass:   './src/scss',
	js:     './src/js',
	jsDist: './dist/js',
	css:    './dist/css',
	bower:  './bower_components',
	base:   path.resolve(__dirname, '.')
};

module.exports = paths;