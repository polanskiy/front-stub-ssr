const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackConfig = require('./webpack.config');

module.exports = (env, argv) => {
  const modeEnv = argv.mode || 'development';
  console.log('modeEnv', modeEnv);
  const config = webpackConfig(modeEnv);

  return {
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(), // Подключаем плагин для CSS
    ],
    resolve: config.resolve,
    module: config.modules,
    entry: {
      main: './src/server/index.tsx', // Тут уже энтрипоинт сервера, который сделаем далее
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'server'), // Все компилируем в папку server
    },
    performance: {
      hints: false,
    },
    optimization: config.optimization(),
    target: 'node', // обязательно указываем режим сборки для node js, а не браузера
    externals: [nodeExternals()], // исключаем node_modules
  };
};
