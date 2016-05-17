module.exports = function(grunt) {

	grunt.config('concat', {

		vendor: {
			files: {
				'<%= project.public %>/assets/js/vendor.js': [
					'bower_components/jquery/dist/jquery.min.js',
					'bower_components/jquery.stellar/jquery.stellar.min.js',
					'<%= project.src %>/assets/js/vendor/scrollme/jquery.scrollme.min.js'
				]
			}
		},
		app: {
			files: {
				'<%= project.public %>/assets/js/app.js': [
					'<%= project.src %>/assets/js/common.js'
				]
			}
		},
	});
};