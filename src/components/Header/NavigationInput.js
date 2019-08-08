import React, { useState, useRef, useEffect } from 'react';
import { hidden } from '../../global.postcss';
import useIsTypingComplete from '../../utils/effects/useIsTypingComplete';
import usePath from '../../utils/effects/usePath';

const pages = ['about', 'resume', 'projects'];

const NavigationInput = () => {
  const [autoCompleteTimeoutID, updateAutoCompleteTimeoutID] = useState(null);
  const [autoCompleteStartIndex, updateAutoCompleteStartIndex] = useState(-1);

  const [isTypingComplete] = useIsTypingComplete();
  const [path, updatePath] = usePath();

  const inputElement = useRef(null);

  useEffect(() => {
    if (isTypingComplete) {
      inputElement.current.focus();
    }
  }, [isTypingComplete]);

  useEffect(() => {
    pages.forEach(page => {
      if (path === page) {
        inputElement.current.setSelectionRange(
          autoCompleteStartIndex,
          path.length
        );
      }
    });
  }, [path]);

  const handleOnChange = event => {
    updatePath(event.target.value);
    clearTimeout(autoCompleteTimeoutID);
    pages.forEach(page => {
      const regExp = new RegExp(`^${event.target.value}`);
      if (
        regExp.test(page) &&
        event.nativeEvent.inputType !== 'deleteContentBackward'
      ) {
        const startIndex = event.target.value.length;
        updateAutoCompleteTimeoutID(
          setTimeout(() => {
            updateAutoCompleteStartIndex(startIndex);
            updatePath(page);
          }, 300)
        );
      }
    });
  };

  return (
    <input
      ref={inputElement}
      type="text"
      placeholder="e.g., about, resume, projects"
      value={path}
      onChange={handleOnChange}
      className={isTypingComplete ? null : hidden}
    />
  );
};

export default NavigationInput;
