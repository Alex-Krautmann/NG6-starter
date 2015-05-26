var gulp = require('gulp'),
    gulpWebpack = require('gulp-webpack'),
    path = require('path'),
    sync = require('run-sequence'),
    serve = require('browser-sync'),
    rename = require('gulp-rename'),
    template = require('gulp-template'),
    fs = require('fs'),
    yargs = require('yargs').argv,
    _ = require('lodash'),
    webpackConfig = require("./webpack.config.js"),
    karmaConfig = require("./karmaConfig.js"),
    karma = require('karma').server;


reload = function () {
    return serve.reload()
};


// helper method to resolveToApp paths
var resolveToApp = function (glob) {
    glob = glob || '';
    return path.join(root, 'app', glob); // app/{glob}
};

var resolveToComponents = function (glob) {
    glob = glob || '';
    return path.join(root, 'app/components', glob); // app/components/{glob}
};

var root = 'client';

// map of all our paths
var paths = {
    js: resolveToComponents('**/*!(.spec.js).js'), // don't include spec files
    styl: resolveToApp('**/*.styl'), // our stylus files
    html: [
        resolveToApp('**/*.html'),
        path.join(root, 'index.html')
    ],
    karmaConfig: __dirname + '/karma.conf.js',
    entry: path.join(root, 'app/app.js'),
    output: root,
    blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**')
};
// use our webpack.config.js to
// build our modules
gulp.task('webpack', function () {
    return gulp.src(paths.entry)
        .pipe(gulpWebpack(webpackConfig))
        .pipe(gulp.dest(paths.output));
});

gulp.task('serve', function () {
    serve({
        port: process.env.PORT || 3000,
        open: false,
        server: {
            baseDir: root
        }
    });
});

gulp.task('watch', function () {
    var allPaths = [].concat(
        [paths.js],
        paths.html,
        [paths.styl]
    );

    gulp.watch(allPaths, ['webpack', reload]);
});

var createCoverageConfigFrom = function (from, coverageReporter) {
    var to = _.assign({}, from);

    to.coverageReporter = coverageReporter || {type: 'text'};

    to.webpack.module.preLoaders = [{test: /(\.js)$/, exclude: [/\.spec.js/, /node_modules\//], loader: 'isparta-instrumenter-loader'}];
    to.webpack.module.loaders[0].loader = 'babel';
    to.reporters = ['progress', 'coverage'];

    return to;
};

gulp.task('test', function (done) {
    var config;

    if (yargs.coverage) {
        config = createCoverageConfigFrom(karmaConfig, {type: 'text-summary'});
    } else if (yargs.coverageDetail) {
        config = createCoverageConfigFrom(karmaConfig, {type: 'text'});
    } else {
        config = _.assign({}, karmaConfig);
    }

    config.browsers = [ yargs.browser || 'PhantomJS' ];

    karma.start(config, done);
});

gulp.task('coverage-report', function (done) {
    var config = createCoverageConfigFrom(karmaConfig, {
        type: 'html',
        dir: 'reports/coverage/'
    });

    config.browsers = [ yargs.browser || 'PhantomJS' ];
    config.autoWatch = false;
    config.singleRun = true;

    karma.start(config, done);
});

gulp.task('component', function () {
    var cap = function (val) {
        return val.charAt(0).toUpperCase() + val.slice(1);
    };

    var name = yargs.name;
    var parentPath = yargs.parent || '';
    var destPath = path.join(resolveToComponents(), parentPath, name);

    return gulp.src(paths.blankTemplates)
        .pipe(template({
            name: name,
            upCaseName: cap(name)
        }))
        .pipe(rename(function (path) {
            path.basename = path.basename.replace('temp', name);
        }))
        .pipe(gulp.dest(destPath));
});


gulp.task('default', function (done) {
    sync('webpack', 'serve', 'watch', done);
});