let path = require('path');
let webpack = require('webpack');

const config = {
    // mode: 'development',
    mode: 'production',
    entry: {
        app: './vue/entry'
    },
    output: {
        path: __dirname  + '/vue',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.js'
            /* 直接import Vue from 'vue',引入的是vue.common.js，无法使用template
             * Vue 最早会打包生成三个文件，一个是 runtime only 的文件 vue.common.js，一个是 compiler only 的文件 compiler.js，
             * 一个是 runtime + compiler 的文件 vue.js。*/
        }
    },
    module: {
        rules:[
            { test: /\.vue$/, exclude: /node_modules/, use: 'vue-loader' },
            { test: /\.scss$/, exclude: /node_modules/, use: [
                { loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }
            ] },
            { enforce: 'pre', test: /\.js$/, exclude: /node_modules/, loader: 'source-map-loader' },
            { test: /\.tsx?$/, exclude: /node_modules/, use: [
                    { loader: 'ts-loader', options: { appendTsSuffixTo: [/\.vue$/] } }
                ]
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    // externals: {
    //     vue: 'Vue',
    //     vuex: 'Vuex'
    // },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin(),
    ]
};

module.exports = config;