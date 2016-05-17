module.exports = function(grunt) {

	grunt.config('sass', {
		options: {
			quiet: true,
			includePaths: require('node-neat').includePaths,
			outputStyle: 'nested',
			imagePath: '../img/',
			precision: 4
		},
		dist: {
			files: {
				'<%= project.public %>/assets/css/app.css': '<%= project.src %>/assets/scss/app.scss'
			}
		}
	});

};