import React, { useState, useEffect, Fragment } from 'react';
import { PropTypes } from 'prop-types';

const Typing = ({ characterDelay, punctuationDelay, children }) => {
  const [index, updateIndex] = useState(1);

  const isPunctuation = character => /,|\.|;|!/.test(character);

  useEffect(() => {
    if (index < children.length) {
      setTimeout(
        () => updateIndex(index + 1),
        isPunctuation(children.charAt(index - 1))
          ? punctuationDelay
          : characterDelay
      );
    }
  });

  return <Fragment>{children.substring(0, index)}</Fragment>;
};

Typing.propTypes = {
  characterDelay: PropTypes.number.isRequired,
  punctuationDelay: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};

export default Typing;
