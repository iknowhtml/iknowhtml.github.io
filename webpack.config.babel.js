import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCssAssetsWebpackPlugin from 'optimize-css-assets-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';

// Two parameters are passed in at bundle time, env & argv. argv contains all flags passed into webpack, including mode.
const webpackConfiguration = (_, argv) => {
  const basePlugins = [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
      meta: [
        {
          name: 'description',
          content:
            'Aki Gao is a software engineer with expertise in front-end, UX/UI, and digital accessibility democratizing the Web at User1st.',
        },
        { name: 'author', content: 'Aki Gao' },
        {
          name: 'viewport',
          content: 'width=device-width, height=device-height, initial-scale=1',
        },
        {
          name: 'google-site-verification',
          content: 'Wb7w2aVwWBpmeGvyST0SVa_K3dUVZf6bRbTgUZtQVi0',
        },
      ],
      favicon: path.resolve('src', 'favicon.png'),
      minify:
        argv.mode === 'production'
          ? {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true,
            }
          : false,
      hash: argv.mode === 'production',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/(CNAME|*.png)', to: () => '[name][ext]' }],
    }),
  ];

  const devPlugins = [new HotModuleReplacementPlugin()];

  return {
    entry: path.resolve('src', 'index.js'),
    output: {
      path: path.resolve('dist'),
      filename: 'index.js',
    },
    // Configures Loaders
    module: {
      rules: [
        {
          test: /\.(post)?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            'postcss-loader',
          ],
        },
      ],
    },
    // Configures Plugins
    plugins:
      argv.mode === 'production'
        ? basePlugins
        : [...devPlugins, ...basePlugins],
    devtool: argv.mode === 'production' ? false : 'eval-source-map',
    optimization: {
      minimizer:
        argv.mode === 'production'
          ? [
              new TerserJSPlugin({
                terserOptions: {
                  ecma: 11,
                  module: true,
                },
              }),
              new OptimizeCssAssetsWebpackPlugin({}),
            ]
          : [],
    },
    //Configures Webpack Development Server
    devServer: {
      port: 8080,
      // Enables webpack's Hot Module Replacement feature.
      hot: true,
      // Shows a full-screen overlay in the browser when there are compiler errors or warnings. Disabled by default.
      overlay: {
        warnings: true,
        errors: true,
      },
      // Sets and watches the content base so that dev server will reload page on HTML changes
      contentBase: path.resolve('src'),
      watchContentBase: true,
    },
  };
};

export default webpackConfiguration;
