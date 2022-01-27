const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    historyApiFallback: true,
    open: true,
    compress: true,
    port: 8080,
    client: {
      logging: 'info',
      progress: true,
    },
    https: true,
    liveReload: false,
  },
  plugins: [
    new Dotenv(),
  ],
});