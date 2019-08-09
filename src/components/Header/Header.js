import React, { useState, useEffect } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

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

  const [headerText, updateNavigationText] = useState(welcomeMessage);

  useEffect(() => {
    if (path === '') {
      if (headerText !== welcomeMessage) {
        updateNavigationText(welcomeMessage);
      }
    } else if (/^(about|resume|projects)$/.test(path)) {
      if (headerText !== pageFoundMessage) {
        updateNavigationText(pageFoundMessage);
      }
    } else {
      if (headerText !== pageNotFoundMessage) {
        updateNavigationText(pageNotFoundMessage);
      }
    }
  }, [path]);

  return (
    <header>
      {isTypingComplete ? (
        <SwitchTransition>
          <CSSTransition
            key={path}
            timeout={300}
            classNames={{ enter, enterActive, exit, exitActive }}
          >
            <h1>{headerText}</h1>
          </CSSTransition>
        </SwitchTransition>
      ) : (
        <h1>
          <Typing characterDelay={35} punctuationDelay={500}>
            {headerText}
          </Typing>
        </h1>
      )}
    </header>
  );
};

export default Header;
