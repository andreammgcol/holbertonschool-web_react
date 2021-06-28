const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        all: ["./modules/header/header.js",
            "./modules/body/body.js",
            "./modules/footer/footer.js"],
      },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
    },
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
        ]
    },
    devServer:{
        contentBase: path.join(__dirname, './public'),
        port:  8564,
        compress: true,
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin(),
    ],
};
