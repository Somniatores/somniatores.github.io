module.exports = function (grunt) {
  grunt.initConfig({
    bowercopy: {
      options: {
        srcPrefix: 'bower_components'
      },
      scripts: {
        options: {
          destPrefix: 'libs/'
        },
        files: {
          "angular.js": "bower_components/angular/angular.js",
          "jquery.js": "bower_components/jquery/dist/jquery.js",
          "bootstrap.js": "bower_components/bootstrap/dist/js/bootstrap.js",
          "smooth-scroll.js": "bower_components/smooth-scroll/dist/js/smooth-scroll.js",
          "jquery.mb.YTPlayer.js": "bower_components/jquery.mb.ytplayer/inc/jquery.mb.YTPlayer.js"
        }
      },
      css: {
        options: {
          destPrefix: 'css/'
        },
        files: {
          "bootstrap.css": "bower_components/bootstrap/dist/css/bootstrap.css",
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bowercopy');
  grunt.registerTask('default', 'bowercopy');
};