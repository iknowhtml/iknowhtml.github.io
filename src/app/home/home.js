import React from 'react';
import Typing from './typing';

import style from './home.css';

class Home extends React.Component {
  render() {
    return (
      <div className={style.home}>
        <div className={style.mainHeader}>
          <Typing characterDelay={50} punctuationDelay={500}>
            Hi, I'm Aki. This is my website. Learn more about me below.
          </Typing>
        </div>
        <input
          className={style.searchBar}
          type="text"
          placeholder="e.g., about, resume, projects"
        />
      </div>
    );
  }
}

export default Home;
