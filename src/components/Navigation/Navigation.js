import React, { useState, useRef, useEffect } from 'react';

import { hidden } from './Navigation.css';
import useIsTypingComplete from '../../utils/effects/useIsTypingComplete';
import usePath from '../../utils/effects/usePath';

const pages = ['about', 'resume', 'projects'];

const NavigationInput = () => {
  const [autoCompleteTimeoutID, updateAutoCompleteTimeoutID] = useState(null);

  const [isTypingComplete] = useIsTypingComplete();
  const [path, updatePath] = usePath();

  const inputElement = useRef(null);

  useEffect(() => {
    if (isTypingComplete) {
      inputElement.current.focus();
    }
  }, [isTypingComplete]);

  const onInputChange = event => {
    updatePath(event.target.value);
    pages.forEach(page => {
      const termRegExp = new RegExp(`^${encodeURI(event.target.value)}`);
      if (
        termRegExp.test(page) &&
        event.nativeEvent.inputType !== 'deleteContentBackward'
      ) {
        clearTimeout(autoCompleteTimeoutID);
        const startIndex = event.target.value.length;
        updateAutoCompleteTimeoutID(
          setTimeout(() => {
            updatePath(page);
            inputElement.current.setSelectionRange(startIndex, page.length);
          }, 200)
        );
      }
    });
  };

  return (
    <nav>
      <input
        ref={inputElement}
        type="text"
        placeholder="e.g., about, resume, projects"
        value={path}
        onChange={onInputChange}
        className={isTypingComplete ? null : hidden}
      />
    </nav>
  );
};

export default NavigationInput;
