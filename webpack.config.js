const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({ template: "public/index.html", filename: "index.html" });
const cssPlugin = new MiniCssExtractPlugin({ filename: '[name].css' });
const cleanPlugin = new CleanWebpackPlugin(['dist']);
const generateSWPlugin = new WorkboxPlugin.GenerateSW({ clientsClaim: true, skipWaiting: true });
const uglifyPlugin = new UglifyJsPlugin({ cache: true, parallel: true, sourceMap: true });
const copyPlugin = new CopyWebpackPlugin([{ from: 'assets/js' }, { from: 'public/logo@16x16.png' }, { from: 'public/logo@32x32.png' }, { from: 'public/logo@180x180.png' }]);

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/, // /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    // 'postcss-loader',
                    // 'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?name=/assets/img/[name].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                }]
            }
        ]
    },
    optimization: {
        minimizer: [uglifyPlugin, new OptimizeCSSAssetsPlugin({})]
    },
    plugins: [cleanPlugin, htmlPlugin, cssPlugin, generateSWPlugin, copyPlugin],
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
    },
    devServer: {
        historyApiFallback: true,
    }
};