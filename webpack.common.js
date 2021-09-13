const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './client/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'public/'),
    publicPath: '/public/',
    filename: 'our-favorite-things.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: 'client/index.html'
    })
  ],
}