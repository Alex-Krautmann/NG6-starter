var webpack = require('webpack');

module.exports = {
    devtool: 'sourcemap',
    entry: {
        app: './client/app/app.js',
        vendor: [
            'angular',
            'angular-ui-router',
            'normalize.css'
        ]
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel'},
            {test: /\.html$/, loader: 'raw'},
            {test: /\.styl$/, loader: 'style!css!stylus'},
            {test: /\.css$/, loader: 'style!css'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
        new webpack.optimize.UglifyJsPlugin({mangle: false})
    ]
};
