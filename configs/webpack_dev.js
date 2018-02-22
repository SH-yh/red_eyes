const webpack = require("webpack");
const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const entryPath = "../src/app.js";
const outPutPath = "../src/public/bound";
const filename = "build.js";
module.exports = {
    entry: path.resolve(__dirname, entryPath),
    output: {
        filename: filename,
        path: path.resolve(__dirname, outPutPath),
        publicPath: "/"
    },
    devtool: "inline-source-map",
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, "../src/views/"),
        hot: true,
        publicPath: "/",
        inline: true,
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
                        name: "[name].[ext]"
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader?modules", "sass-loader"]
            }
        ]
    },
    plugins: [
        new UglifyJSPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};