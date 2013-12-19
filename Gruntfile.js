module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
		livereload: {
			options : {
				livereload: 
				{
					key: grunt.file.read('liveReloadKey.pem'),
        				cert: grunt.file.read('liveReloadCert.pem'),
        				spawn: false
				} 
			},
			files: [grunt.option("source")+ "/css/**/*.css"],
		}
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};
