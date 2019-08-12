import React from 'react';
import ReactMarkdown from 'react-markdown';
import content from './About.md';
import './About.css';

const About = () => {
  return (
    <main>
      <ReactMarkdown source={content} />
    </main>
  );
};

export default About;
