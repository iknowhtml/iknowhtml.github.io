import GoogleFontsPlugin from 'google-fonts-webpack-plugin';

import partial from '../partial';

/**
Webpack plugin partial for loading Google fonts into build.
Sample Option:
{
  fonts: [
    {
      family: 'Raleway',
      variants: [
        'regular',
        'italic',
        '500',
        '500italic',
        '600',
        '600italic',
        '700',
        '700italic',
      ],
    },
  ],
}
**/

const googleFonts = options => config =>
  partial({ plugin: new GoogleFontsPlugin(options), }, config);

export default googleFonts;
