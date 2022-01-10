
// 
// how to launch:
// $ gulp --host hallowin.josno
// 

const { watch, gulp } = require('gulp');
const argv = require('yargs').argv;
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

function clean(cb) {
  // body omitted
  cb();
}

function javascript(cb) {
  // body omitted
  cb();
}

function css(cb) {
  // body omitted
  cb();
}

function serve(cb) {
    // body...
    browserSync.init({
        open: 'external',
        host:  argv.host === undefined ? 'lama.josno' : argv.host,
        proxy: argv.host === undefined ? 'lama.josno' : argv.host,
        port: 3000 // to work with apache
    });

    watch([
        'README.md',
        'CHANGELOG.md',
        'src/**/*',
        'templates/**/*',
        'templates/*',
        'public/**/*',
        'public/*'
    ]).on('change', reload);

    // // You can use a single task
    // watch('src/*.css', css);
    // // Or a composed task
    // watch('src/*.js', series(clean, javascript));
    cb();
};

function watchForEncore(cb) {

    cb();
};

exports.default = serve;