module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: '> 1%'}), // add vendor prefixes
        ]
      },
      dist: {
        src: 'css/main.css'
      }
    },
    uglify: {
      my_target: {
        files: {
          'js-min/script.js': ['js/**/*.js']
        }
      }
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/main.css": "less/index.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['less/*.less'], // which files to watch
        tasks: ['less', 'postcss'],
        options: {
          nospawn: true
        }
      },
      js: {
        files: ['js/*.js'],
        tasks: ['uglify'],
        options: {
          nospawn: true
        }
      },
    }
  });

  grunt.registerTask('default', ['less', 'postcss', 'uglify', 'watch']);
};