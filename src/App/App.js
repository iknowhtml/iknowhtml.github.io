import React from 'react';
import style from './app.css';

import Typing from './typing';

const app = () => (
  <div>
    <Typing
      text="Hi, I'm Aki. This is my website. Learn more about me below."
      characterDelay={50}
      punctuationDelay={250}
    />
  </div>
);

export default app;
