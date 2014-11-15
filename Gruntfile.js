module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all : ['src/*.js'],
            options: {
                jshintrc : true
            }
        },

        nodeunit: {
            all: ['test/test-*.js']
        },

        githooks: {
            all: { 'pre-commit' : 'jshint nodeunit'},
            options: { template : 'hooks_custom_templates/pre-commit.js'}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-githooks');

    grunt.registerTask('default', ['githooks']);
}
