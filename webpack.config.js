const path = require('path');
module.exports = {
  resolve: {
    extensions: ['*','.js', '.jsx', '.css', '.eot', '.min.css'],
    alias: {
        jquery: "jquery/src/jquery"
    }
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
      inline: false,
      port: 3000,
      contentBase: './public/',
      historyApiFallback: true
   },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        loader: "babel-loader", 
        exclude: /node_modules/ 
      },
      { 
        test: /\.jsx$/, 
        loader: "babel-loader", 
        exclude: /node_modules/ 
      },
      { 
        test: /\.(css|min.css)$/, 
        loader: "style-loader!css-loader",
        exclude: /node_modules/ 
      },{
        //IMAGE LOADER
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader:'file-loader',
        exclude: /node_modules/ 
      },
      {
        // HTML LOADER
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/ 
      },
      { // config for fonts
       test: /\.(woff|woff2|eot|ttf|otf)$/,
       loader: 'file-loader',
       exclude: /node_modules/ 
      },
      {
        test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
        loader: "imports-loader?this=>window"
      },
      {
        test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
        loader: "react-olw-carousel"
      }
    ]
  }
}