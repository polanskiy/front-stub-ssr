const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const watchMode = argv.liveReload || false;
  const modeEnv = argv.mode || 'development';
  const isDev = modeEnv === 'development';
  const config = webpackConfig(modeEnv);

  return {
    context: path.resolve(__dirname),
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.tsx'],
    // output: {
    //   filename: '[hash].js',
    //   path: path.resolve(__dirname, 'build'),
    // },
    resolve: config.resolve,
    // devServer: {
    //   port: 4200,
    //   historyApiFallback: true,
    // },
    devtool: isDev ? 'source-map' : '',
    plugins: [
      new HTMLWebpackPlugin({
        template: './src/index.html',
        minify: {
          collapseWhitespace: !isDev,
        },
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, 'src/assets/images/favicon.ico'),
          to: path.resolve(__dirname, 'build'),
        },
      ]),
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css',
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 4200,
      watchContentBase: true,
      progress: true,
      hot: true,
      open: true,
      historyApiFallback: true,
    },
    output: {
      filename: watchMode
        ? 'assets/[name].[hash].js'
        : 'assets/[name].[chunkhash].js', // небольшое условие, т.к. WDS не будет работать с chunkhash
      path: path.resolve(__dirname, 'build'), // Весь наш результат складываем в папку dist
      publicPath: '/',
    },
    performance: {
      hints: false,
    },
    module: config.modules,
    optimization: config.optimization(),
  };
};
