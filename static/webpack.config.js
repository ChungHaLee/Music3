const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    // source file location
    entry: {
        main: path.resolve(__dirname, "src", "js", "example.js"),
        wheel: path.resolve(__dirname, "src", "js", "wheel.js"),
        vanta: path.resolve(__dirname, "src", "js", "vanta.js"),
        particle: path.resolve(__dirname, "src", "js", "app.js"),
        audio: path.resolve(__dirname, "src", "js", "audio.js")
    },
    mode: "development",
    target: "web",
    devServer: {hot: false},
    output: {
        path: path.resolve(__dirname, "src", "js", "dist"),
        filename: '[name].js'
    },
   
    plugins: [new HTMLWebpackPlugin({})]
};