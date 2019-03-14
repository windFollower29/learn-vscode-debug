

module.exports = {
  entry: {
    app: './app.js'
  },
  output: {
    path: 'dist',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'bable-loader',
        exclude: /node_modules/,
      }
    ]
  }
}