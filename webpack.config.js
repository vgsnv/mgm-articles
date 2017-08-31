const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.styl$/,
        use: [
                {
                  loader:'style-loader'
                },
                {
                  loader: 'typings-for-css-modules-loader',
                  options: {
                    modules: true,
                    namedExport: 'camelCase',
                    camelCase: true
                  }
                },
                {
                  loader: 'stylus-loader'
                }
              ],
      },
      {
        test: /(\.ts|\.tsx)/,
        loader: "awesome-typescript-loader",
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ]
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      store: path.resolve(__dirname, 'src/store/'),
      views: path.resolve(__dirname, 'src/views/'),
      api: path.resolve(__dirname, 'src/api/'),
    },
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [
    new webpack.WatchIgnorePlugin([
      /styl\.d\.ts$/
    ])
  ]
}
