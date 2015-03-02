/* global module:false */
module.exports = function (grunt) {
    var webpackConfig = require("./webpack.config.js");
    var port = grunt.option('port') || 8000;

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            core: {
                files: {
                    'dist/css/reveal.css': 'css/reveal.scss',
                    'dist/css/custom.css': 'css/custom.scss'
                }
            },
            themes: {
                files: {
                    'dist/css/theme/black.css': 'css/theme/source/black.scss',
                    'dist/css/theme/white.css': 'css/theme/source/white.scss',
                    'dist/css/theme/league.css': 'css/theme/source/league.scss',
                    'dist/css/theme/beige.css': 'css/theme/source/beige.scss',
                    'dist/css/theme/night.css': 'css/theme/source/night.scss',
                    'dist/css/theme/serif.css': 'css/theme/source/serif.scss',
                    'dist/css/theme/simple.css': 'css/theme/source/simple.scss',
                    'dist/css/theme/sky.css': 'css/theme/source/sky.scss',
                    'dist/css/theme/moon.css': 'css/theme/source/moon.scss',
                    'dist/css/theme/solarized.css': 'css/theme/source/solarized.scss',
                    'dist/css/theme/blood.css': 'css/theme/source/blood.scss'
                }
            }
        },

        autoprefixer: {
            dist: {
                src: ['dist/css/reveal.css', 'dist/css/custom.css']
            }
        },

        cssmin: {
            compress: {
                files: {
                    'dist/css/reveal.min.css': ['dist/css/reveal.css', 'dist/css/custom.css', 'css/flexboxgrid.css']
                }
            }
        },

        jshint: {
            options: {
                curly: false,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                eqnull: true,
                browser: true,
                expr: true,
                globals: {
                    head: false,
                    module: false,
                    console: false,
                    unescape: false,
                    define: false,
                    exports: false
                }
            },
            files: ['Gruntfile.js', 'js/reveal.js']
        },

        connect: {
            server: {
                options: {
                    port: port,
                    base: '.',
                    livereload: true,
                    open: true
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            js: {
                files: ['Gruntfile.js', 'js/**/*.js'],
                tasks: 'webpack'
            },
            theme: {
                files: ['css/theme/source/*.scss', 'css/theme/template/*.scss'],
                tasks: 'css-themes'
            },
            css: {
                files: ['css/reveal.scss', 'css/custom.scss'],
                tasks: 'css'
            },
            html: {
                files: ['index.html']
            }
        },
        webpack: {
            options: webpackConfig,
            build: {
                // webpack options
                entry: './js/main.js',
                output: {
                    path: 'dist/',
                    filename: 'main.min.js'
                }
            }
        }

    });

    // Dependencies
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Theme CSS
    grunt.registerTask('css-themes', ['sass:themes']);

    // All CSS
    grunt.registerTask('css', ['sass', 'autoprefixer', 'cssmin']);

    // Serve presentation locally
    grunt.registerTask('serve', ['connect', 'watch']);

    // Run tests
    grunt.registerTask('test', ['jshint']);

};
