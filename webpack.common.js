const path = require("path");
const HWPP = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
    entry: {
        app: path.resolve(__dirname, "./src/scripts/app.js"),
    },
    output: {
        filename: "[name][contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    plugins: [
        new Dotenv(),
        new HWPP({
            filename: 'index.html',
            template: "./src/templates/index.html",
            chunk: ["app"]
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html/i,
                loader: "html-loader"
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.js%/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
