import React from 'react';
import classNames from 'classnames';

import './Raleway-Light.ttf';

import Typing from './typing';

import style from './app.css';

class App extends React.Component {
  state = {
    headerText: "Hi, I'm Aki. this is my website. Learn more about me below.",
    renderInput: false,
  };

  onInputChange = event => {
    if (this.autoCompleteTimeout) {
      clearTimeout(this.autoCompleteTimeout);
    }
    const startIndex = event.target.value.length;
    this.autoCompleteTimeout = setTimeout(() => {
      this.searchBar.value = 'about';
      this.searchBar.setSelectionRange(startIndex, this.searchBar.value.length);
    }, 300);
  };

  renderInput = () => {
    this.setState({ renderInput: true });
    this.searchBar.focus();
  };

  render() {
    const searchBar = classNames({
      [style.searchBar]: true,
      [style.hide]: this.state.renderInput ? false : true,
    });

    return (
      <div className={style.container}>
        <div className={style.header}>
          <Typing
            characterDelay={50}
            punctuationDelay={500}
            isFinished={this.state.renderInput}
            onCompleteTyping={this.renderInput}
          >
            {this.state.headerText}
          </Typing>
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
