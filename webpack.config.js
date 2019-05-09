const path = require('path')
const CopyWebPackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
          
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', {targets: {chrome: 70}}],
                                '@babel/preset-react'
                            ]    
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new CopyWebPackPlugin([{from: 'static'}])
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../build'),
        host: '0.0.0.0',
        port: 9000,
        inline: true,
        index: 'index.html',
        https: false
    }
}
