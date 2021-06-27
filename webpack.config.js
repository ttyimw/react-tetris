const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const enabledSourceMap = true;

module.exports = [{
    // watch: true,
    mode: 'development',
    entry: {
        bundle: './src/index.tsx'
    },
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // watchOptions: {
    //     poll: true
    // },
    module: {
        rules: [
            {
              // 拡張子 .ts の場合
              test: /\.tsx?$/,
              use: [
                { loader: "babel-loader" },
                { loader: "ts-loader" }
              ],
              exclude: /node_modules/,
            },
            {
              test: /\.css$/,
              use: [
                {
                  loader: 'style-loader',
                },
                {
                  loader: 'css-loader',
                  options: {
                    sourceMap: true,
                  },
                },
              ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: "css-loader",
                        options: {
                            //   url: false,
                            sourceMap: enabledSourceMap,
                            // 0 => no loaders (default);
                            // 1 => postcss-loader;
                            // 2 => postcss-loader, sass-loader
                            importLoaders: 2
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                          postcssOptions: {
                            plugins: [
                              ["autoprefixer", { grid: true }],
                            ],
                          },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            // ソースマップの利用有無
                            sourceMap: enabledSourceMap
                        },
                    }
                ],
            },
            {
                test: /\.pcss/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: { plugins: [ require('postcss-nested') ] },
                    },
                ],
            }
          ]
    },
    resolve: {
        // 拡張子を配列で指定
        extensions: [
          '.ts', '.tsx', '.js', '.jsx',
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3003,
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "./src/index.html",
      })
    ],
    target: ["web", "es5"],
}];
