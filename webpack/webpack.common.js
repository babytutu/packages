const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack =  require('webpack')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name]_[hash:8].bundle.js',
    path: path.join(process.cwd(), 'dist'),
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'packages-demo',
      template: path.join(process.cwd(), 'index.template.ejs'),
    }),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      }
    ],
  },
  resolve: {
    alias: {
      'src': path.join(process.cwd(), 'src'),
      '@pkg': path.join(process.cwd(), 'packages'),
    }
  },
  stats: {
    // Add built modules information
    modules: false,
  }
}
