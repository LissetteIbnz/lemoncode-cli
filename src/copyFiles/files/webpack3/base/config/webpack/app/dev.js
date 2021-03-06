const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const helpers = require('../../helpers');

const outputPath = helpers.resolveFromRootPath('dist');

module.exports = merge.strategy({
  entry: 'prepend',
})(base, {
  devtool: 'inline-source-map',
  output: {
    path: outputPath,
    filename: 'js/[name].js',
  },
  devServer: {
    contentBase: outputPath,
    inline: true,
    host: 'localhost',
    port: 8080,
    stats: 'minimal',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin({
      disable: true,
    }),
    new CleanWebpackPlugin(outputPath),
  ],
});
