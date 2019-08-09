import React, { useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import NavigationInput from './NavigationInput';
import Typing from '../Typing';

import useIsTypingComplete from '../../utils/effects/useIsTypingComplete';
import usePath from '../../utils/effects/usePath';

import { enter, enterActive, exit, exitActive } from '../../global.postcss';

const welcomeMessage =
  'Hi, my name is Aki. Welcome to my website. Learn more about me below.';
const pageFoundMessage = 'Aki Gao - 1 search result';
const pageNotFoundMessage = 'Aki Gao - 0 search results';

const Header = () => {
  const [isTypingComplete] = useIsTypingComplete();
  const [path] = usePath();

  const [headerText, updateHeaderText] = useState(welcomeMessage);

  useEffect(() => {
    if (path === '') {
      if (headerText !== welcomeMessage) {
        updateHeaderText(welcomeMessage);
      }
    } else if (/^(about|resume|projects)$/.test(path)) {
      if (headerText !== pageFoundMessage) {
        updateHeaderText(pageFoundMessage);
      }
    } else {
      if (headerText !== pageNotFoundMessage) {
        updateHeaderText(pageNotFoundMessage);
      }
    }
  }, [path]);

  return (
    <header>
      {isTypingComplete ? (
        <SwitchTransition>
          <CSSTransition
            key={path}
            timeout={450}
            classNames={{ enter, enterActive, exit, exitActive }}
          >
            <h1>{headerText}</h1>
          </CSSTransition>
        </SwitchTransition>
      ) : (
        <h1>
          <Typing characterDelay={50} punctuationDelay={500}>
            {headerText}
          </Typing>
        </h1>
      )}
      <NavigationInput />
    </header>
  );
};

export default Header;
