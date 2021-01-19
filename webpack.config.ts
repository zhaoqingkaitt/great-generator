import webpack = require("webpack");
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const ENTIRYS = {
    'great-generator/index':'./src/index.ts',
    'great-generator/g-number-utils':'./src/g-number-utils',
    'example':'./example/demo01',
};

module.exports = {
    entry: ENTIRYS,
    devtool: "inline-source-map",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: function(){
            // 根据 chunkData.chunk.name 自己实现文件名生成逻辑
            return '[name].js'
        },
        library: 'great-generator', // 指定类库名,主要用于直接引用的方式(比如script)
        libraryExport: "default", // 对外暴露default属性，就可以直接调用default里的属性
        globalObject: 'this', // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
        libraryTarget: 'umd' // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
    },
    mode: "production", // 告诉webpack使用production模式的内置优化,
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: "package-npm.json", to: "great-generator/package.json"},
                {from: "./dist/great-generator", to: "../node_modules/great-generator"},
            ],
            options: {
                concurrency: 100,
            },
        }),
        new webpack.ProvidePlugin({ // ProvidePlugin 可以将模块作为一个变量，被webpack在其他每个模块中引用。只有你需要使用此变量的时候，这个模块才会被 require 进来。
            _: ['lodash']
        })
    ]
};
