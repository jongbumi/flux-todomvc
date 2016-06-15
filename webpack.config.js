module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/bin",
    publicPath: "/bin/",
    filename: "app.bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react']
        }
      }
    ]
  }
};