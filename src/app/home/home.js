import React from 'react';
import classNames from 'classnames';

import Typing from './typing';

import style from './home.css';

class Home extends React.Component {
  state = {
    shouldRenderInput: false,
  };

  setRenderInputTrue = () => {
    this.setState({ shouldRenderInput: true });
    this.searchBar.focus();
  };

  render() {
    const searchBar = classNames({
      [style.searchBar]: true,
      [style.hide]: this.state.shouldRenderInput ? false : true,
    });

    return (
      <div className={style.home}>
        <div className={style.mainHeader}>
          <Typing
            characterDelay={50}
            punctuationDelay={500}
            setRenderInputTrue={this.setRenderInputTrue}
          >
            Hi, I'm Aki. This is my website. Learn more about me below.
          </Typing>
        </div>
        <input
          className={searchBar}
          type="text"
          placeholder="e.g., about, resume, projects"
          ref={input => {
            this.searchBar = input;
          }}
        />
      </div>
    );
  }
}

export default Home;
