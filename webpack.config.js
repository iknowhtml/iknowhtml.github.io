module.exports = {
  entry: './static/js/main.js',

  output: {
    path: __dirname,
    filename: 'index.js'
  },

  module: {
    loaders: [{
      test:/\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      include: __dirname,
      query: {
        presets: ['es2015']
	    }
    }]
  },

  resolveLoader: {
    moduleExtensions: ['-loader']
  },

  devServer: {
    contentBase: './',
    port: 5000
  }
}
