const path = require('path');

process.noDeprecation = true;

module.exports = {
  context: __dirname,
  entry: './frontend/entry.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/frontend/public'),
    publicPath: '/frontend/public/'
  },
  devServer: {
    contentBase: './frontend/views',
    stats: {
      colors: true,
      errorDetails: true
    },
    inline: true,
    port: 8080
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      js: __dirname
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: [/\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf|otf|ico)(\?.*$|$)/i],
        loader: 'file-loader?name=[name].[ext]!url-loader?limit=25000'
      }
    ]
  }
};
