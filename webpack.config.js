const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "widget.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
          },
          "image-webpack-loader",
        ],
      },
    ],
  },
};
