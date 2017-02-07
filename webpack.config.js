module.exports = {
  entry: './static/js/main.js',
  output: {
    path: __dirname,
    filename: 'index.js'
  },
  module:{
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
  devServer:{
    address: 'localhost',
    port: 5000
}
}
