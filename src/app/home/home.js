import React from 'react';
import Typing from './typing';

class Home extends React.Component {
  render() {
    return (
      <Typing
        text="Hi, I'm Aki. This is my website. Learn more about me below."
        characterDelay={65}
        punctuationDelay={500}
      />
    );
  }
}

export default Home;
