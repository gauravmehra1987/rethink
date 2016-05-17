module.exports = function(grunt) {

	grunt.config('watch', {
		concat: {
			files: [
				'grunt-tasks/grunt-concat.js'
			],
			tasks: [
				'concat',
//				'jshint'
			]
		},
		js: {
			files: [
				'<%= project.src %>/assets/js/**/*/*.js'
			],
			tasks: [
				'concat:vendor',
				'concat:app',
			]
		},
		sass: {
			files: [
				'<%= project.src %>/assets/scss/**/*.scss'
			],
			tasks: [
				'sass',
			]
		},
		images: {
			files: [
				'<%= project.src %>/assets/img/**/*.{png,jpg,gif}'
			],
			tasks: [
				'copy'
			]
		},
		
		html: {
			files: ['<%= project.src %>/view/**/*.{hbs,json}'],
        	tasks: ['assemble']
		},
		
		livereload: {
			options: {
				livereload: '<%= connect.options.livereload %>'
			},
			files: [
				'<%= project.public %>/**/*.html',
				'<%= project.public %>/assets/css/*.css',
				'<%= project.public %>/assets/js/*.js',
				'<%= project.public %>/assets/img/**/*.{png,jpg,jpeg,gif,svg}'
			]
		}
	});

};