import partial from '../partial';

const babel = (options = {}) => config =>
  partial(
    {
      rule: {
        test: /\.js$/,
        use: 'babel-loader',
        ...options,
      },
    },
    config
  );

export default babel;
