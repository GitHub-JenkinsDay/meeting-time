module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'assets/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    jasmine: {
      components: {
        src: [ "assets/scripts/cookies.js", "assets/scripts/url.js",
        "assets/scripts/cities.js", "assets/scripts/time_formats.js",
        "assets/scripts/settings.js", "assets/scripts/app.js" ],
        options: {
          specs: 'test/specs/*.js',
          vendor: ['vendor/fastclick*.js', 'vendor/jquery*.js',
          'vendor/moment.min*.js', 'vendor/moment-timezone*.js'],
          template: 'test/my_template.tmpl',
        }
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jshint', 'jasmine']);
  grunt.registerTask('travis', ['jasmine']);

};
