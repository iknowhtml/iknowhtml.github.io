import React from 'react';
import classNames from 'classnames';

import './Raleway-Light.ttf';

import Typing from './typing';

import style from './app.css';

class App extends React.Component {
  state = {
    displayInput: false,
  };

  setDisplayInputTrue = () => {
    this.setState({ displayInput: true });
    this.searchBar.focus();
  };

  render() {
    const searchBar = classNames({
      [style.searchBar]: true,
      [style.hide]: this.state.displayInput ? false : true,
    });

    return (
      <div className={style.container}>
        <div className={style.header}>
          {this.state.displayInput ? (
            "Hi, I'm Aki. This is my website. Learn more about me below."
          ) : (
            <Typing
              characterDelay={50}
              punctuationDelay={500}
              setDisplayInputTrue={this.setDisplayInputTrue}
            >
              Hi, I'm Aki. This is my website. Learn more about me below.
            </Typing>
          )}
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

export default App;
