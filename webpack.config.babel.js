import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCssAssetsWebpackPlugin from 'optimize-css-assets-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';

const DESCRIPTION =
  'Aki Gao is a senior software engineer with expertise in front-end, Web3 & TypeScript with a passion for deliverying delightful products that empower people, solving difficult technical problems & leading high performing engineering teams.';

const TITLE = "Aki Gao's Personal Site";

const PREVIEW_IMAGE_URL =
  'https://media.licdn.com/dms/image/C4D03AQFAXFJFf4AQkA/profile-displayphoto-shrink_800_800/0/1645480361505?e=1683158400&v=beta&t=1N7qVwWPe-N3sxb8huwNMb9bp2jamCvm1e7Wwj-rc2U';

// Two parameters are passed in at bundle time, env & argv. argv contains all flags passed into webpack, including mode.
const webpackConfiguration = (_, argv) => {
  const basePlugins = [
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
      title: TITLE,
      meta: [
        {
          name: 'description',
          content: DESCRIPTION,
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
        {
          name: 'keywords',
          content: 'aki, gao, software engineer, front end, web3, typescript',
        },
        {
          name: 'og:title',
          content: TITLE,
        },
        {
          name: 'og:url',
          content: 'iknowht.ml',
        },
        {
          name: 'og:description',
          content: DESCRIPTION,
        },
        {
          name: 'og:image',
          content: PREVIEW_IMAGE_URL,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: TITLE,
        },
        {
          name: 'twitter:description',
          content: DESCRIPTION,
        },
        { name: 'twitter:image', content: PREVIEW_IMAGE_URL },
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
      client: {
        overlay: {
          warnings: true,
          errors: true,
        },
      },
      // Sets and watches the content base so that dev server will reload page on HTML changes
      static: path.resolve('src'),
      liveReload: true,
    },
  };
};

export default webpackConfiguration;
