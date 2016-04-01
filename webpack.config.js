var path = require('path');

module.exports = {
  context: path.join(__dirname, '../', '../'),
  entry: {
    clients: "./frontend/clients/index.js"
  },
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "[name]-bundle.js",
    publicPath: "/assets/"
  },
  module: {
    loaders: [
      {
        test : /.jsx?$/,
        loader : 'babel',
        exclude : /node_modules/,
        query : {
          presets : ['es2015', 'react']
        }
      }
      { test: /\.coffee$/,
        loader: 'coffee-loader' },
      { test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"},
      { test: /\.woff$/,
        loader: "url-loader?prefix=font/&limit=5000" }
    ]
  },
  resolve: {
    extensions: ['', 'js', 'jsx', 'coffee']
    alias: {
      ap: path.join(__dirname, "frontend", "ap"),
      shared: path.join(__dirname, "frontend", "ap", "shared")
    }
  }
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common-bundle.js')
    //uncomment this plugin if you wanna use jQuery globally
/***********
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
***********/
  ]
}
