let path = require('path');
let webpack = require('webpack');

const config = {
    // mode: 'development',
    mode: 'production',
    entry: {
        app: './react/entry'
    },
    output: {
        path: __dirname  + '/react',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules:[
            //{ test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
            { enforce: 'pre', test: /\.js$/, exclude: /node_modules/, loader: 'source-map-loader' },
            { test: /\.tsx?$/, exclude: /node_modules/, use: 'awesome-typescript-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    externals: {
        // react: 'React',
        // redux: 'Redux',
        // 'prop-types': 'PropTypes',
        // 'react-dom': 'ReactDOM',
        // 'react-redux': 'ReactRedux',
        flux: 'Flux',
        Rx: 'Rx',
        'react-bootstrap': 'ReactBootstrap',
        'react-router-dom': 'ReactRouterDOM',
        'redux-observable': 'ReduxObservable'
    },
    // optimization: {
    //     // minimize: true,
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
    ]
};

module.exports = config;