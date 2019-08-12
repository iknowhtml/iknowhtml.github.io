import React from 'react';
import { Router, Location } from '@reach/router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  enter,
  enterActive,
  exit,
  exitActive,
} from './FadeTransitionRouter.css';

const FadeTransitionRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          timeout={500}
          classNames={{ enter, enterActive, exit, exitActive }}
        >
          <Router location={location}>{children}</Router>
        </CSSTransition>
      </TransitionGroup>
    )}
  </Location>
);

export default FadeTransitionRouter;
