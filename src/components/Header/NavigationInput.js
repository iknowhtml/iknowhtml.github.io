import React, { useRef, useEffect } from 'react';
import useIsTypingComplete from '../../utils/effects/useIsTypingComplete';
import { hidden } from '../../global.postcss';

const NavigationInput = () => {
  const [isTypingComplete] = useIsTypingComplete();
  const inputElement = useRef(null);

  useEffect(() => {
    if (isTypingComplete) {
      inputElement.current.focus();
    }
  }, [isTypingComplete]);

  return (
    <input
      ref={inputElement}
      type="text"
      placeholder="e.g., about, resume, project"
      className={isTypingComplete ? null : hidden}
    />
  );
};

export default NavigationInput;
