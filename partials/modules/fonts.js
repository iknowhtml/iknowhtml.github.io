import partial from '../partial';

const fonts = () => config =>
  partial(
    {
      rule: {
        test: /\.(eot|svg|ttf|woff2?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    },
    config
  );

export default fonts;
