import htmlWebpackPlugin from 'html-webpack-plugin';
import htmlWebpackTemplate from 'html-webpack-template';

import partial from '../partial';

const htmlWebpack = (userOptions = {}) => config => {
  const defaultOptions = {
    title: '',
    filename: 'index.html',
    template: htmlWebpackTemplate,
    appMountId: 'app',
    inject: false,
    minify: {
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
    },
    hash: true,
  };

  const options = Object.assign({}, defaultOptions, userOptions);

  return partial({ plugin: new htmlWebpackPlugin(options), }, config);
};

export default htmlWebpack;
