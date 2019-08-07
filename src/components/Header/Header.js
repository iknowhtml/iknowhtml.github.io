import React, { useState, useEffect } from 'react';
import NavigationInput from './NavigationInput';
import Typing from '../Typing';
import useIsTypingComplete from '../../utils/effects/useIsTypingComplete';
import usePath from '../../utils/effects/usePath';

const welcomeMessage =
  'Hi, my name is Aki. Welcome to my website. Learn more about me below.';
const pageFoundMessage = 'Aki Gao - 1 search result';
const pageNotFoundMessage = 'Aki Gao - 0 search results';

const Header = () => {
  const [isTypingComplete] = useIsTypingComplete();
  const [path] = usePath();

  const [headerText, updateHeaderText] = useState(welcomeMessage);

  useEffect(() => {
    if (path === '/') {
      updateHeaderText(welcomeMessage);
    } else if (/^\/(about|resume|projects)$/.test(path)) {
      updateHeaderText(pageFoundMessage);
    } else {
      updateHeaderText(pageNotFoundMessage);
    }
  }, [path]);

  useEffect(() => {}, [isTypingComplete]);

  return (
    <header>
      <h1>
        <Typing characterDelay={50} punctuationDelay={500}>
          {headerText}
        </Typing>
      </h1>
      <NavigationInput />
    </header>
  );
};

export default Header;
