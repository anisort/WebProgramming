const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Добавляем MiniCssExtractPlugin

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/, // Поддержка SCSS
                use: [
                    MiniCssExtractPlugin.loader, // Извлечение CSS в отдельный файл
                    'css-loader',   // Загрузка CSS
                    'sass-loader',  // Компиляция SCSS в CSS
                ],
            },
            {
                test: /\.css$/,  // Поддержка обычных CSS файлов
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,  // Поддержка изображений
                type: 'asset/resource',
                generator: {
                    filename: 'assets/images/[name][ext]',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Home',
            template: path.resolve(__dirname, './src/pages/index.html'),
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Hobby',
            template: path.resolve(__dirname, './src/pages/about.html'),
            filename: 'about.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Schedule',
            template: path.resolve(__dirname, './src/pages/rozklad.html'),
            filename: 'rozklad.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Gallery',
            template: path.resolve(__dirname, './src/pages/photo.html'),
            filename: 'photo.html',
        }),
        new HtmlWebpackPlugin({
            title: 'News',
            template: path.resolve(__dirname, './src/pages/news.html'),
            filename: 'news.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/assets/images'),
                    to: path.resolve(__dirname, './dist/assets/images'),
                },
            ],
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/css'),
                    to: path.resolve(__dirname, './dist/css'),
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css', // Имя итогового CSS файла
        }),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
    },
};
