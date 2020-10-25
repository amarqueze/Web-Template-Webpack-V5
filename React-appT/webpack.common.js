const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    entry: { main: './src/views/index.jsx' },
    output: {
        filename: '[name]_[fullhash].js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']  },
            { test: /\.(png|svg|jpg|gif)$/, loader: 'file-loader' },
            { test: /\.json$/i, loader: 'json5-loader', options: { esModule: false }, type: 'javascript/auto' }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist'],
            cleanStaleWebpackAssets: false
        }),
        new HtmlWebpackPlugin({ template: './src/views/assets/index.html' }),
        new MiniCssExtractPlugin({
            filename: '[name]_[fullhash].css',
            chunkFilename: '[name]_[fullhash].css'
        })
    ]
}