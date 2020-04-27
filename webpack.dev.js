const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugIn = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    formatter: 'stylish'
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugIn({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        }),
    ]

}
