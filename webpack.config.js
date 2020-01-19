const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
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
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 7070,
        https: true,
        http2: true,
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
                    use: ['css-loader?-url', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [autoprefixer],
                        },
                    },
                    'sass-loader'],
                    fallback: 'style-loader',
                }),
            },
            // {
            //     test: /\.(png|jpe?g|gif)$/i,
            //     use: [
            //       {
            //         loader: 'file-loader',
            //       },
            //     ],
            // },
        ],
    },
    plugins: [
        new ExtractTextPlugin("css/index.css"),
        new CopyPlugin([
            {
                from: 'src/assets',
                to: 'assets/[path][name].[ext]',
                cache: true,
            },
            {
                from: 'src/assets/favicons/favicon.ico',
                to: '[name].[ext]',
                cache: true,
            },
            {
                from: 'src/*.html',
                to: '[name].[ext]',
            },
            {
                from: 'CNAME',
                to: '[name]',
            },
          ]),
      ],
    watchOptions: {
        ignored: /node_modules/,
    },
};

module.exports = config;
