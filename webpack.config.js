const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const isDev = process.env.NODE_ENV !== 'production';

const config = {
    entry: './app/js/main.js',
    output: {
        path: path.resolve(__dirname, 'public/static'),
        publicPath: '/public/static',
        filename: 'js/bundle.js',
    },
    devServer: {
        openPage: 'index.html',
        historyApiFallback: true,
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(css|scss|sass)$/i,
                use: [
                    isDev
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: true,
                                localIdentName: '[local]__[sha1:hash:hex:6]',
                                exportLocalsConvention: 'dashesOnly',
                            }
                        },
                    },
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        }),
        new WebpackCleanupPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
};

module.exports = config;