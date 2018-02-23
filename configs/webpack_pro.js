const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entryPath = "../src/app.js";
const outPutPath = "../src/public/bound";
const filename = "build.js";

module.exports = {
    entry: path.resolve(__dirname, entryPath),
    output: {
        filename: filename,
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
                        limit: 8192,
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
        new HtmlWebpackPlugin({template: './src/views/index.html'})
    ],
    devtool: "source-map"
};