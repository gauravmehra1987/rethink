module.exports = function(grunt) {

	grunt.config('copy', {
		main: {
			expand: true,
			dot: true,
			cwd: '<%= project.src %>',
			dest: '<%= project.public %>',
			src: [
				'*.{ico,png,txt}',
				'assets/fonts/{,*/}*.*',
				'assets/favicon/{,*/}*.*'
			],
		},
		images: {
			expand: true,
			dot: true,
			cwd: '<%= project.src %>',
			dest: '<%= project.public %>',
			src: [
				'assets/img/**/*.*',
			]
		}
	});

};