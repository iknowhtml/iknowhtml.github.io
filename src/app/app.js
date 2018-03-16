import React from 'react';
import style from './app.css';

import Typing from './typing';

const app = () => (
  <Typing
    text="Hi, I'm Aki. This is my website. Learn more about me below."
    characterDelay={65}
    punctuationDelay={250}
  />
);

export default app;
