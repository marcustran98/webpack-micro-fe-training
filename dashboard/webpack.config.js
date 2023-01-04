const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
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
        new MiniCssExtractPlugin({
            filename: '[name].css', // create style.scss file to collect all css file
        }),
        new HtmlWebpackPlugin({
            filename: 'dashboard.html',
            title: 'Dashboard',
            scriptLoading: 'defer',
            // use handlebars-loader to use these variables
            description: "Some Description",
            template: 'src/index.hbs',
        }),
        new ModuleFederationPlugin({
            name: "Dashboard",
            filename: 'remoteEntry.js',
            remotes: {
                AppOne: 'AppOne@http://localhost:3001/remoteEntry.js', // AppOne is ModuleFederationPlugin.name
                AppTwo: 'AppTwo@http://localhost:3002/remoteEntry.js' // AppOne is ModuleFederationPlugin.name,
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