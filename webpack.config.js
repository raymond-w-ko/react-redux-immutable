"use strict";

var webpack = require("webpack");
var path = require("path");

var MIN_BUILD = JSON.parse(process.env.MIN_BUILD || "0");

var BUILD_DIR = path.resolve(__dirname, "build");
var APP_DIR = path.resolve(__dirname, "src");

var plugins = [];
var plugin;
if (MIN_BUILD) {
  plugin = new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  });
  plugins.push(plugin);

  plugin = new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false },
    minimize: true
  });
  plugins.push(plugin);
} else {
  plugin = new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("development")
    }
  });
  plugins.push(plugin);
}

var PROJECT_FILENAME = "TODO";

var config = {
  entry: APP_DIR + "/index.js",
  devtool: "source-map",
  module: {
    loaders: [{ test: /\.js?/, include: APP_DIR, loader: "babel-loader" }]
  },
  output: {
    path: BUILD_DIR,
    filename: MIN_BUILD
      ? PROJECT_FILENAME + ".min.js"
      : PROJECT_FILENAME + ".js"
  },
  plugins: plugins
};

module.exports = config;
