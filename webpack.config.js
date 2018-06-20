const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
    // alias: {
    //   '@ngui/react': '../src/index.ts'
    // }
  },
  devtool: 'source-map',
  entry: {
    "polyfills": [
      "./src/polyfills.ts"
    ],
    "main": [
      "./src/main.ts"
    ],
    "styles": [
      "./src/styles.css"
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: ["awesome-typescript-loader"],
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { 
        test: /\.ts$/,
         use: ['awesome-typescript-loader'] 
      },
      { test: /\.html$/, use: 'html-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      "template": "./src/index.html",
      // "filename": "./index.html",
      // "hash": false,
      // "inject": true,
      // "compile": true,
      // "favicon": false,
      // "minify": {
      //   "caseSensitive": true,
      //   "collapseWhitespace": true,
      //   "keepClosingSlash": true
      // },
      // "cache": true,
      // "showErrors": true,
      // "chunks": "all",
      // "excludeChunks": [],
      // "title": "Webpack App",
      // "xhtml": true
    }),
  ],
  output: {
    path: `${__dirname}/dist/`,
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    publicPath: "./dist",
    contentBase: "./dist",
    hot:true
  }
};

// if (process.env.NODE_ENV === 'prod') {
//   config.plugins = [
//     new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
//   ];
//   config.module.rules.push({
//     test: /\.ts$/, loader: 'strip-loader?strip[]=debug,strip[]=console.log'
//   });
// }

module.exports = config;