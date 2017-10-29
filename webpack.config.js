module.exports = {
    context: __dirname,
    entry: "./Vue2LeafLetDraw.vue",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ]
  }
}
