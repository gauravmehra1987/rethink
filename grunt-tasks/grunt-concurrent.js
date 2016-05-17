module.exports = function(grunt) {

	grunt.config('concurrent', {
		
		dev: [
			'assemble',
			'concat:vendor',
			'concat:app',
			'copy'
		]
	});

};