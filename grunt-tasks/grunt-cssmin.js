module.exports = function(grunt) {

	grunt.config('cssmin', {
		options: {
			keepSpecialComments: 0,
			relativeTo: '<%= project.public %>/assets/css'
		},
		target: {
			files: {
				'<%= project.public %>/assets/css/app.css': '<%= project.public %>/assets/css/app.css'
			}
		}
	});

};