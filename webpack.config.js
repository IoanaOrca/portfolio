const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const config = {
    entry: [
            path.join(__dirname, 'src/js/index.js'),
            path.join(__dirname, 'src/css/index.scss'),
        ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'js/[name].js',
    },
    devServer: {
        contentBase: './src',
        compress: true,
        port: 7070,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel-loader', 'eslint-loader'],
            }, 
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [autoprefixer],
                        },
                    },
                    'sass-loader'],
                    fallback: 'style-loader',
                }),
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin("css/index.css"),
      ],
    watchOptions: {
        ignored: /node_modules/,
    },
};

module.exports = config;
