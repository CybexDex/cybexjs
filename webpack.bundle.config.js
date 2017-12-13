const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "index.js"),
  output: {
    path: path.resolve(__dirname),
    filename: "commonjs.js",
    library: "cybexjs",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
  },
  devtool: false,
  resolve: {
    extensions: [
      ".js",
    ],
    modules: [
      "node_modules"
    ]
  },
  target: "node"
};