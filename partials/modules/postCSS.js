import ExtractTextPlugin from 'extract-text-webpack-plugin';

import partial from '../partial';

const postCSS = (userOptions = {}) => config => {
  const defaultOptions = {
    options: {},
    minimize: true,
  };

  const { options, minimize, } = Object.assign({}, defaultOptions, userOptions);

  // allChunks will only be true if minimize is false because this requirement is strictly for in a development environment. Resolves issue with Webpack loading modules out of order when using webpack-dev-server
  const allChunks = minimize ? false : true;

  const cssLoader = {
    loader: 'css-loader',
    options: {
      modules: true,
      localIdentName: '[name]__[local]__[hash:base64:5]',
      minimize,
    },
  };

  const loaderList = [cssLoader, 'postcss-loader',];

  return partial(
    {
      rule: {
        test: /.css$/,
        use: ['css-hot-loader',].concat(
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: loaderList,
          }),
          ...options
        ),
      },
      plugin: new ExtractTextPlugin({ filename: '[name].css', allChunks, }),
    },
    config
  );
};

export default postCSS;
