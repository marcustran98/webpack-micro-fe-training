const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
        publicPath: 'http://localhost:3003/'
    },
    mode: 'none',
    devServer: {
        port: 8888,
        static: {
            directory: path.resolve(__dirname, './dist')
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: ['handlebars-loader']
            }
        ]
    },
    plugins: [
        new TerserPlugin(),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
        // new CleanWebpackPlugin()
        new MiniCssExtractPlugin({
            filename: '[name].css', // create style.scss file to collect all css file
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'App Title',
            scriptLoading: 'defer',
            // use handlebars-loader to use these variables
            description: "Some description",
            template: 'src/index.hbs',
        }),
        new ModuleFederationPlugin({
            name: "AppTitle",
            filename: 'remoteEntry.js',
            exposes: {
                './Title': './src/index.js'
            }
        })
    ],
    devtool: 'inline-source-map', // in order to debugging
    optimization: { // code splitting
        splitChunks: {
            chunks: 'all',
            minSize: 10000
        },
    },
    target: ['web', 'es5'],
};