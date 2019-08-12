import React, { useState, useEffect, Fragment } from 'react';
import { PropTypes } from 'prop-types';

import { cursor } from './cursor.postcss';

import useIsTypingComplete from '../../utils/effects/useIsTypingComplete';

const Typing = ({ characterDelay, punctuationDelay, children }) => {
  const [index, updateIndex] = useState(1);
  const [isTypingComplete, updateIsTypingComplete] = useIsTypingComplete();

  const isPunctuation = character => /,|\.|;|!/.test(character);

  useEffect(() => {
    if (index >= children.length) {
      updateIsTypingComplete(true);
    } else {
      setTimeout(
        () => updateIndex(index + 1),
        // checks index - 1 to ensure longer delay after a punctuation has been "typed"
        isPunctuation(children.charAt(index - 1))
          ? punctuationDelay
          : characterDelay
      );
    }
  }, [index]);

  return isTypingComplete ? (
    children
  ) : (
    <Fragment>
      {children.substring(0, index)}
      <span className={cursor} />
    </Fragment>
  );
};

Typing.propTypes = {
  characterDelay: PropTypes.number.isRequired,
  punctuationDelay: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};

export default Typing;
