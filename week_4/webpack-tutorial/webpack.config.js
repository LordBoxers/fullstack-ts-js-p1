const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ["babel-loader"]
            }
        ]
    },
    optimization: {
      splitChunks: { chunks: "all" }
    },


    plugins: [ 
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
    //output: {path: path.resolve(__dirname, 'build')}
};