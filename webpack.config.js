const path = require('path');
const atimport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const csso = require('postcss-csso');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');

module.exports = {
    entry: './js/local.js',
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'bundle.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '../fonts/[name].[ext]'
                }
            },
            {
                test: /\.png$/,
                loader: 'file-loader',
                options: {
                    name: '../img/[name].[ext]'
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    atimport(),
                                    cssnext(),
                                    csso()
                                ],
                            }
                        }
                    ]
                })
            }
        ]
    },
    resolve: {
        modules: ['node_modules', 'img']
    },
    plugins: [
        new SpritesmithPlugin({
            src: {
                cwd: 'img/sprite',
                glob: '*.png'
            },
            target: {
                image: '../img/sprite.png',
                css: 'postcss/sprite.css'
            },
            apiOptions: {
                cssImageRef: '~sprite.png'
            }
        }),
        new ExtractTextPlugin('../css/bundle.min.css')
    ]
};