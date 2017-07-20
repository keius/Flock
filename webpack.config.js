var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/flock.jsx",
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(sass|scss|css)$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
