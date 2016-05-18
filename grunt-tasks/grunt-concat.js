module.exports = function(grunt) {

	grunt.config('concat', {

		vendor: {
			files: {
				'<%= project.public %>/assets/js/vendor.js': [
					'bower_components/jquery/dist/jquery.min.js',
					'bower_components/jquery.stellar/jquery.stellar.min.js',
					'bower_components/letteringjs/jquery.lettering.js',
					'<%= project.src %>/assets/js/vendor/scrollme/jquery.scrollme.min.js',
					'<%= project.src %>/assets/js/vendor/jquery.nicescroll.js',
					'<%= project.src %>/assets/js/vendor/yt.js',
					'<%= project.src %>/assets/js/vendor/jquery-scrolltofixed-min.js',
					'<%= project.src %>/assets/js/vendor/jquery.bxslider.js'
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