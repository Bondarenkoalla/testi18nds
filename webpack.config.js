const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env) => {
    return {
        mode: env.mode ?? "development",
        entry: {
            main: './src/index.js',
            news: './src/news.js',
            davbet: './src/davbet.js',
            article: './src/article.js',
            404: './src/404.js',
        },
        devServer: {
            static: './dist',
            port: 3031,
            hot: true,
            historyApiFallback: {
                rewrites: [
                    { from: /^\/$/, to: '/index.html' },
                    { from: /^\/davbet$/, to: '/davbet.html' },
                    { from: /^\/fa\/news$/, to: '/news.html' },
                    { from: /^\/news$/, to: '/news.html' },
                    { from: /^\/news\/(.+)$/, to: '/article.html' },
                    { from: /./, to: '/404.html' },
            
                ],
            },
        },

        stats: {
            children: true,
        },
        devtool: 'inline-source-map',
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
                chunkFilename: "[id].css",
            }),
            new HtmlWebpackPlugin({
                title: 'Development - Main Page',
                template: 'i18n/index.html',
                filename: "index.html",
                chunks: ['main'],
            }),
            new HtmlWebpackPlugin({
                title: 'Development - Main Page',
                template: 'i18n/fa/index.html',
                filename: "fa/index.html",
                chunks: ['main'],
            }),
            new HtmlWebpackPlugin({                
                title: 'Development - news',
                template: "i18n/news.html",
                filename: "news.html",
                chunks: ['news'],
            }),
            new HtmlWebpackPlugin({
                inject: false,
                title: 'news',
                template: "i18n/fa/news.html",
                filename: "fa/news.html",
                chunks: ['news'],
            }),
            new HtmlWebpackPlugin({
                title: 'Development - davbet',
                template: "i18n/davbet.html",
                filename: "davbet.html",
                chunks: ['davbet'],
            }),
            new HtmlWebpackPlugin({
                title: 'Development - davbet',
                template: "i18n/fa/davbet.html",
                filename: "fa/davbet.html",
                chunks: ['davbet'],
            }),
            new HtmlWebpackPlugin({
                title: 'Development - article',
                template: "./src/article.html",
                filename: "article.html",
                chunks: ['article'],
            }),
            new HtmlWebpackPlugin({
                title: '404 - Page Not Found',
                template: "./src/404.html",
                filename: "404.html",
                chunks: ['404'],
            }),
            // Add more HtmlWebpackPlugin instances for additional pages
        ],
        output: {
            filename: "[name].bundle.js",
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader'
                        }
                    ]
                },
                {
                    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                    type: 'asset/inline',
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(scss|css)$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
            ]
        }
    }
}
