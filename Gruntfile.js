'use strict';

module.exports = function (grunt) {
	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);
	
	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);
	
	// Configurable paths for the application
	var appConfig = {
            src: 'resources',
            public: 'public',
            name: 'Samsung Aus'
	};
	
	// Define the configuration for all the tasks
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		// Project settings
		project: appConfig,

	});
	
	grunt.loadTasks('grunt-tasks');

	grunt.registerTask('dev', [
		'clean:public',
		'concurrent:dev',
		'sass',
		'connect',
		'watch'
	]);
	
	grunt.registerTask('build', [
		'clean:public',
		'concurrent:dev',
		'sass',
		'uglify',
		'cssmin',
		'connect',
		'watch'
	]);
}