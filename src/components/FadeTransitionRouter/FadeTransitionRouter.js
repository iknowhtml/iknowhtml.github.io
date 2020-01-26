import React from 'react';
import { Router, Location } from '@reach/router';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { PropTypes } from 'prop-types';
import {
  enter,
  enterActive,
  enterActiveAbout,
  exit,
  exitActive,
} from './FadeTransitionRouter.postcss';
import usePath from '../../utils/effects/usePath';

const FadeTransitionRouter = ({ children }) => {
  const [path] = usePath();
  return (
    <Location>
      {({ location }) => (
        <SwitchTransition>
          <CSSTransition
            key={location.key}
            timeout={{ enter: path === 'about' ? 1150 : 900, exit: 1000 }}
            classNames={{
              enter,
              enterActive: path === 'about' ? enterActiveAbout : enterActive,
              exit,
              exitActive,
            }}
          >
            <Router location={location}>{children}</Router>
          </CSSTransition>
        </SwitchTransition>
      )}
    </Location>
  );
};

FadeTransitionRouter.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
export default FadeTransitionRouter;
