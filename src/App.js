import React, { useEffect, Fragment } from 'react';
import { Router, navigate } from '@reach/router';
import Navigation from './components/Navigation';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Header from './components/Header';
import usePath from './utils/effects/usePath';

const App = () => {
  const [path, updatePath] = usePath();

  if (window.location.pathname === '/') {
    if (window.location.search !== '') {
      updatePath(window.location.search.substring(1));
    }
  }

  useEffect(() => {
    navigate(`/${path}`);
  }, [path]);

  return (
    <Fragment>
      <Header />
      <Navigation />
      <Router>
        <About path="/about" />
        <Resume path="/resume" />
        <Projects path="/projects" />
      </Router>
    </Fragment>
  );
};

export default App;
