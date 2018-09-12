const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
    entry : './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.css$/,
                use:{
                    loader: 'style-loader'
                }
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract('css-loader')
            },

            {
                test: /\.svg$/,
                use: {
                    loader: 'svg-inline-loader'
                }
            }
        ]
    },

    plugins:[
        new ExtractTextPlugin('style.css')
    ]
}