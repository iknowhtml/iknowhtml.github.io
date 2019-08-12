import React from 'react';
import ReactMarkdown from 'react-markdown';

import './Projects.css';

import content from './Projects.md';

const Projects = () => {
  return (
    <main>
      <ReactMarkdown source={content} />
    </main>
  );
};

export default Projects;
