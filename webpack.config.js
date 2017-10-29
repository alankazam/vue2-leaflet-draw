module.exports = {
    context: __dirname,
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        library: 'vue2leafletdraw'
    },
    module: {
    rules: [
      {
        test: '/\.js$/',
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ]
  }
}
