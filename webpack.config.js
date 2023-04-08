const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    //Entry point
    entry: './src/frontend/index.jsx',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/frontend/index.html"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "targets": "defaults"
                            }],
                            '@babel/preset-react'
                        ]
                    }
                }]
            },

            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    }
}