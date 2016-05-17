module.exports = function(grunt) {
	grunt.config('clean', {
		options: {
			force: true,
		},
		public: {
			files: [{
				dot: true,
				src: [
					'<%= project.public %>/**/*'
				]
			}]
		},
		html: [
			'<%= project.public %>/**/*.html',
		]
	});

};