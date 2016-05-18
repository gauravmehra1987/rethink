module.exports = function(grunt) {

	grunt.config('assemble', {
		options: {
			flatten: true,
			data: '<%= project.src %>/json/*.json',
			partials: '<%= project.src %>/view/partials/**/*.hbs'
		},
		home: {
			options: {
				layout: '<%= project.src %>/view/layouts/home.hbs'
			},
			files: {
				'<%= project.public %>/': [
					'<%= project.src %>/view/templates/home/index.hbs',
					'<%= project.src %>/view/templates/pages/demo.hbs'
				]
			}
		}
	});
};