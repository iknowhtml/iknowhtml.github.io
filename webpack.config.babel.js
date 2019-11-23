import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackTemplate from 'html-webpack-template';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCssAssetsWebpackPlugin from 'optimize-css-assets-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';

// Two parameters are passed in at bundle time, env & argv. argv contains all flags passed into webpack, including mode.
const webpackConfiguration = () => ({
  entry: path.resolve('src', 'index.js'),
  output: {
    path: path.resolve('dist'),
    filename: isProduction ? '[name].bundle.[hash].js' : '[name].js',
  },
  // Configures Loaders
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Extract global.postcss with parsing as CSS Module
      {
        test: /global.postcss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProduction,
              reloadAll: true,
            },
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /.(post)?css$/,
        exclude: /global.postcss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProduction,
              reloadAll: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isProduction
                  ? '[hash:base64:5]'
                  : '[path][name]__[local]',
              },
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
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
        test: /CNAME$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]',
            },
          },
        ],
      },
      { test: /\.md$/, use: 'raw-loader' },
    ],
  },
  // Configures Plugins
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Aki Gao',
      lang: 'en',
      meta: [
        {
          name: 'description',
          content: 'Personal website for Aki Gao',
        },
        {
          name: 'viewport',
          content: 'width=device-width,height=device-height initial-scale=1',
        },
      ],
      favicon: path.resolve('src', 'static', 'favicon.png'),
      template: HtmlWebpackTemplate,
      appMountId: 'root',
      minify: isProduction
        ? {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
          }
        : false,
      hash: isProduction,
      //Prevents automatic injection of CSS & JS into template.
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: path.resolve('src', '404.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      //Prevents automatic injection of CSS & JS into template.
      inject: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
  // Configures Optimizations
  optimization: {
    minimizer: isProduction
      ? [new TerserJSPlugin({}), new OptimizeCssAssetsWebpackPlugin({})]
      : [],
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: isProduction ? false : 'eval-source-map',
  //Configures Webpack DevServer
  devServer: {
    port: 8080,
    // Enables webpack's Hot Module Replacement feature.
    hot: true,
    // Shows a full-screen overlay in the browser when there are compiler errors or warnings. Disabled by default.
    overlay: {
      warnings: true,
      errors: true,
    },
    contentBase: path.resolve('dist'),
    historyApiFallback: {
      index: '/404.html',
    },
  },
});

export default webpackConfiguration;
