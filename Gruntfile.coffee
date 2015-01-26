module.exports = (grunt) ->
    require('load-grunt-tasks')(grunt)

    grunt.initConfig
        autoprefixer:
            options:
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            dist:
                src: 'css/app.css'
                dest: 'css/app.css'

        coffee:
            compile:
                options:
                    bare: true
                    sourceMap: true
                    sourceMapDir: 'js/maps/'
                files:
                    'js/app.js': 'js/app.coffee'

        cssmin:
            dist:
                files:
                    'css/app.min.css': 'css/app.css'

        imagemin:
            forHTML:
                expand: true
                cwd: 'img/'
                src: ['**/*.{png,jpg,gif}']
                dest: 'img/min/'
            forCSS:
                expand: true
                cwd: 'css/img/'
                src: ['**/*.{png,jpg,gif}']
                dest: 'css/img/min/'
        libsass:
            dist:
                src: 'css/app.scss'
                dest: 'css/app.css'

        replace:
            dist:
                src: ['*.html', 'css/app.css']
                overwrite: true
                replacements:[{from: "img/", to: "img/min/"}]

        uglify:
            dist:
                options:
                    mangle: false
                    sourceMap: true
                    sourceMapName: 'js/maps/uglify.app.min.map'
                files:
                    'js/app.min.js': ['js/app.js']

        watch:
            options:
                spawn: false
            css:
                files: ['css/*.scss', 'css/**/*.scss']
                tasks: ['libsass', 'autoprefixer',]
            scripts:
                files: ['js/*.coffee', 'js/**/*.coffee']
                tasks: ['coffee']


    grunt.registerTask 'default', ['watch']
    grunt.registerTask(
        'build',
        [
            'libsass',
            'autoprefixer',
            'cssmin',
            'coffee',
            'uglify'
        ]
    )