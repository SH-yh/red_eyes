const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entryPath = "../src/app.js";
const outPutPath = "../src/public/bound";

module.exports = {
    entry: {
        build: path.resolve(__dirname, entryPath),
        vendor: ['react']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, outPutPath),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: "babel-loader",
                exclude: "/node_modules/"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 25000,
                        name: "images/[name].[ext]"
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader?modules", "sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin(),
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: './src/views/index.html',
            chunks: ['vendor', 'build'],
        }),
        new webpack.optimize.CommonsChunkPlugin({name:'vendor',  filename:'vendor.js'})
    ],
    devtool: "source-map"
};