import React from 'react';
import Typing from './typing';

import style from './home.css';

class Home extends React.Component {
  render() {
    return (
      <div className={style.home}>
        <Typing characterDelay={65} punctuationDelay={500}>
          Hi, I'm Aki. This is my website. Learn more about me below.
        </Typing>
      </div>
    );
  }
}

export default Home;
