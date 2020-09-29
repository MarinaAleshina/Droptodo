const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  TerserJSPlugin = require("terser-webpack-plugin"),
  OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
  ExtractTextPlugin = require("extract-text-webpack-plugin");

const isDevelopment = process.env.NODE_ENV === "production";

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development", // production
  entry: "./js/index.js",

  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "./dist/src/js")
  },

  resolve: {
    extensions: [".js", ".json", ".png", ".css"]
    // alias: {
    //     '@': path.resolve(__dirname, "src/assets/asdsaf/sdgdfg/dfhgfh/fghgfh")
    // }
  },

  devServer: {
    port: 8000,
    hot: isDevelopment
  },

  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: isDevelopment
      }
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",

      options: {
        hmr: isDevelopment,
        reloadAll: true
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)/,
        use: ["file-loader"]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
};
