const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        admin: './src/modules/admin/index.js',
        user: './src/modules/user/index.js',
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
        // publicPath: '/static/'
    },
    mode: 'none',
    devServer: {
        port: 8888
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset/inline',
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024 
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.(scss|css)$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',  // npm package
                ]
            },
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
            filename: 'admin.html',
            chunks: ['admin'],
            title: 'Webpack Training - Admin page',
            scriptLoading: 'defer',
            // use handlebars-loader to use these variables
            description: "Admin page",
            template: './src/index.hbs',
            minify: false // 
        }),
        new HtmlWebpackPlugin({
            filename: 'user.html',
            chunks: ['user'],
            title: 'Webpack Training',
            scriptLoading: 'defer',
            // use handlebars-loader to use these variables
            description: "Some description",
            template: './src/index.hbs',
            minify: false
        }),
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