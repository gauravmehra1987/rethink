module.exports = function(grunt) {

	grunt.config('htmlmin', {
		build: {
			options: {
				collapseWhitespace: true,
				conservativeCollapse: true,
				collapseBooleanAttributes: true,
				removeComments: true,
				removeOptionalTags: true
			},
			files: [{
				expand: true,
				cwd: '<%= project.public %>',
				src: ['**/*.html'],
				dest: '<%= project.public %>'
			}]
		}
	});

};