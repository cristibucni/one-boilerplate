const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const DotENVWebpack = require('dotenv-webpack');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = (env, argv) => ({
  devtool: 'inline-source-map',
  entry: path.join(__dirname, 'src'),
  context: __dirname,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      src: path.join(__dirname, 'src'),
      components: path.join(__dirname, 'src/components'),
      containers: path.join(__dirname, 'src/containers'),
      images: path.join(__dirname, 'src/images'),
      translations: path.join(__dirname, 'src/translations'),
      utils: path.join(__dirname, 'src/utils'),
      assets: path.join(__dirname, 'src/assets'),
      store: path.join(__dirname, 'src/store'),
      i18n: path.join(__dirname, 'src/i18n'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(otf)$/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src', 'index.html'),
      favicon: path.join(__dirname, 'src/assets/images/react.svg'),
    }),
    new MiniCSSExtractPlugin(),
    new ESLintWebpackPlugin({
      exclude: 'node_modules',
      fix: true,
    }),
    new DotENVWebpack({
      path: `.env${argv.mode === 'production' ? '' : '.dev'}`,
    }),
  ],
  devServer: {
    open: true,
  },
});
