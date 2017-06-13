const webpack = require('webpack');

module.exports = function webpackConfig(env) {
  return {
    entry: './static/js/main.js',

    output: {
      path: __dirname,
      filename: 'index.js'
    },

    plugins: [
      new webpack.DefinePlugin({ ENV: JSON.stringify(env.environment) })
    ],

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          include: __dirname,
          options: {
            babelrc: false,
            presets: ['es2015']
          }
        },
        {
          test: /\.html$|\.css$/,
          loader: 'raw-loader'
        }
      ]
    },

    resolveLoader: {
      moduleExtensions: ['-loader']
    },

    devServer: {
      contentBase: './',
      port: 5000
    }
  };
};
