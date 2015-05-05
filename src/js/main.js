window.jQuery = window.$ = require('jquery');
//var $ = require('jquery');
//require('jquery');
require('select2');
//require('select2.full.min.js');
var test = require('test');

$(function() {
	$('select').select2();
	$('body').css('background','#ddd');
});
