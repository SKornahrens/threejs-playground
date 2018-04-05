const devMode = process.env.NODE_ENV === 'production' ? false : true
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const webpack = require('webpack');
const path = require('path');
//
const config = {
  entry: './src/app.js',
  devtool: devMode ? 'eval-source-map': undefined,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  watch: true,
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      files: ['.dist/*.html'],
      server: { baseDir: ['dist'] }
    })
  ]
};

module.exports = config;
