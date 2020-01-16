const path = require('path');

module.exports = {
  // APP ENTRY POINT
  entry: path.join(__dirname, 'src', 'index.js'),

  // OUTPUT DIRECTORY
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },

  // EVIROMENT MODE
  mode: process.env.NODE_ENV || 'development',

  // LOADERS
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },

  // PATH RESOLVE
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },

  // DEV SERVER ENTRY POINT
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 3500,
    watchContentBase: true,
    open: true,
  },
};
