module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nodemon: {
        dev: {
            script: 'server.js'
        }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }
 /*   jasmine_node:{
      options:{
        forceExit:true,
        match:'.',
        matchall:false,
        extensions:'js',
        specNameMatcher:'spec'

      },

      all:['bower_components/angular-mocks/','app/test/specs/','app/scripts/']
      //helpers:''
    }*/
  });

  // Load the plugin 
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-karma');
    //grunt.loadNpmTasks('grunt-jasmine-node');


  // Default task(s).
  grunt.registerTask('default', ['nodemon']);

};