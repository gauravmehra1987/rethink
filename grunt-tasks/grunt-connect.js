module.exports = function(grunt) {

	grunt.config('connect', {
		options: {
			port: 8080,
			livereload: 35729,
			hostname: 'localhost'
		},
		livereload: {
			options: {
				open: true,
				base: [
					'<%= project.public %>'
				]
			}
		}
	});

};