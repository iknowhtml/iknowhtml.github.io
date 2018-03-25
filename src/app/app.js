import React from 'react';
import classNames from 'classnames';

import './Raleway-Light.ttf';

import Typing from './typing';

import style from './app.css';

class App extends React.Component {
  state = {
    headerText: "Hi, I'm Aki. this is my website. Learn more about me below.",
    displayInput: false,
  };

  onInputChange = event => {
    const value = event.target.value;
    this.searchBar.setSelectionRange(0, value.length);
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
            this.state.headerText
          ) : (
            <Typing
              characterDelay={50}
              punctuationDelay={500}
              isFinished={this.state.displayInput}
              setDisplayInputTrue={this.setDisplayInputTrue}
            >
              {this.state.headerText}
            </Typing>
          )}
        </div>
        <input
          className={searchBar}
          type="text"
          placeholder="e.g., about, resume, projects"
          onChange={this.onInputChange}
          ref={input => {
            this.searchBar = input;
          }}
        />
      </div>
    );
  }
}

export default App;
