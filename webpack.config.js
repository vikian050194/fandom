const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

const buildFolderName = "build";

module.exports = {
    mode: "development",
    entry: ["./src/index.js"],
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }]
            }
        ]
    },
    experiments: {
        futureDefaults: true,
        outputModule: true
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, buildFolderName),
        publicPath: "/",
        library: {
            type: "module"
        }
    },
    plugins: [
        new ESLintPlugin({})
    ]
};
