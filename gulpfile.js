const gulp = require('gulp'),
    browserSync = require('browser-sync'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    webpack = require('webpack-stream'),
    gulpif = require('gulp-if')


/* === Красивое отображение ошибок === */
const notify = require('gulp-notify')


function emit_end(err) {
    this.emit('end')
}
/* --- Красивое отображение ошибок --- */

/* === Файлы проекта === */

const conf = {
    dest: './build'
}

const html_files = [
    './app/**/*.html',
]

const js_files = [
    './app/js/**/*.js',
    '!./app/js/**/*.map'
]

var isDev = false // Прод

// let isDev = true // Дев

var isProd = !isDev

var webpack_config = {
    output: {
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }]
    },
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'eval-source-map' : 'none',
}

/* --- Файлы проекта --- */

// Пользовательские скрипты проекта

function browser_sync() {
    browserSync({
        server: {
            baseDir: conf.dest // './build'
        },
        notify: false,
        open: false,
        reloadOnRestart: true,
        cors: true,
    })
}

function js() {
    return gulp.src('./app/js/app.js')
        .pipe(webpack(webpack_config).on("error", notify.onError(function(error) {
            return "Error webpack: " + error.message;
        })).on('error', emit_end))
        .pipe(gulpif(isDev, sourcemaps.init({ loadMaps: true })))
        .pipe(gulp.dest(conf.dest + '/js'))
        .pipe(gulpif(isDev, sourcemaps.write(conf.dest + '/js/maps')))
        .pipe(browserSync.reload({ stream: true }))
        .pipe(livereload())
}

function html() {
    return gulp.src(html_files)

    .pipe(gulp.dest(conf.dest))
        .pipe(browserSync.reload({ stream: true }))
        .pipe(livereload())
}


gulp.task('watch', ['build', 'browser_sync'], function() {
    livereload.listen()

    gulp.watch(html_files, ['html'])
    gulp.watch(js_files, ['js'])
})

gulp.task('build', ['removedist', 'js', 'html'], function() {
    gulp.src([
        'app/.htaccess',
    ]).pipe(gulp.dest(conf.dest))

})


function removedist() {
    try {
        return del.sync(conf.dest)
    } catch (err) {}
}


gulp.task('browser_sync', browser_sync)
gulp.task('js', js)
gulp.task('html', html)
gulp.task('removedist', removedist)


gulp.task('default', ['watch'])