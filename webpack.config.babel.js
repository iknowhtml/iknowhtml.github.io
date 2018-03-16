import path from 'path';
import webpack from 'webpack';

import { babel, postCSS, } from './partials/modules';
import { htmlWebpack, hotModuleReplacement, } from './partials/plugins';
import { devServer, } from './partials/configurations';
import { splitChunks, runtimeChunk, } from './partials/optimizations';

const paths = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  modules: path.join(__dirname, 'node_modules'),
};

const base = {
  entry: ['babel-polyfill', `${paths.src}/index.js`,],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: paths.dist,
  },
};

const common = [babel({ exclude: paths.modules, }),];
const development = [
  postCSS({ minimize: false, }),
  htmlWebpack({ minify: false, }),
  hotModuleReplacement(),
  devServer(),
];
const production = [postCSS(), htmlWebpack(), splitChunks(), runtimeChunk(),];

const webpackConfiguration = config =>
  config.reduce((config, partial) => partial(config), base);

export default ({ NODE_ENV, }) => {
  const config =
    NODE_ENV === 'production'
      ? [...common, ...production,]
      : [...common, ...development,];

  return webpackConfiguration(config);
};
