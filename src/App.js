import React, { useEffect } from 'react';
import { navigate } from '@reach/router';

import Header from './components/Header';
import Navigation from './components/Navigation';
import FadeTransitionRouter from './components/FadeTransitionRouter';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

import usePath from './utils/effects/usePath';
import useIsTypingComplete from './utils/effects/useIsTypingComplete';

const App = () => {
  const [path, updatePath] = usePath();
  const [, updateIsTypingComplete] = useIsTypingComplete();

  if (window.location.pathname === '/') {
    if (window.location.search !== '') {
      updateIsTypingComplete(true);
      updatePath(window.location.search.substring(1));
    }
  }

  const sanitizePath = path => encodeURI(path.replace(/^\/+/, ''));

  useEffect(() => {
    navigate(`/${sanitizePath(path)}`);
  }, [path]);

  return (
    <>
      <Header />
      <Navigation />
      <FadeTransitionRouter>
        <About path="/about" />
        <Resume path="resume" />
        <Projects path="projects" />
      </FadeTransitionRouter>
    </>
  );
};

export default App;
