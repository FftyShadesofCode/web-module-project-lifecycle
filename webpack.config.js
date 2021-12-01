/*
 * Copyright (c) 2021. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 * Morbi non lorem porttitor neque feugiat blandit. Ut vitae ipsum eget quam lacinia accumsan.
 * Etiam sed turpis ac ipsum condimentum fringilla. Maecenas magna.
 * Proin dapibus sapien vel ante. Aliquam erat volutpat. Pellentesque sagittis ligula eget metus.
 * Vestibulum commodo. Ut rhoncus gravida arcu.
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'index.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                exclude: /node_modules/,
                loader: 'html-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        'presets': [['@babel/preset-env', {targets: {chrome: '80'}}]],
                        'plugins': [['babel-plugin-styled-components'], ['@babel/plugin-transform-react-jsx']]
                    }
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ],
    },
}