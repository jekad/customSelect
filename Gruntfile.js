module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		uglify: {
			build: {
				src: 'src/js/customSelect.js',
				dest: 'dist/customSelect.min.js'
			}
		}

    });

	grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};