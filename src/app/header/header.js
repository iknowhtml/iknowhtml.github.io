import React from 'react';

import Typing from '../typing';

import style from './header.css';

const header = ({ children: text, typingComplete, onCompleteTyping }) => (
  <div className={style.header}>
    {typingComplete ? (
      text
    ) : (
      <Typing
        characterDelay={50}
        punctuationDelay={500}
        onCompleteTyping={onCompleteTyping}
      >
        {text}
      </Typing>
    )}
  </div>
);

export default header;
