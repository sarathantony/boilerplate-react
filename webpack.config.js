const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        path : path.join(__dirname, '/dist'),
        filename : 'index.bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
  
        },
        {
          test: /\.jsx/,
          loader: 'jsx-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins : [
      new HtmlWebpackPlugin(
        {
          template : './src/index.html'
        }
      )
    ]
}
