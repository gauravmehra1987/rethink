module.exports = function(grunt) {

	grunt.config('uglify', {
		options: {
			mangle: false
		},
		my_target: {
			files: {
				'<%= project.public %>/assets/js/vendor.js': ['<%= project.public %>/assets/js/vendor.js'],
				'<%= project.public %>/assets/js/app.js': ['<%= project.public %>/assets/js/app.js']
			}
		}
	});

};