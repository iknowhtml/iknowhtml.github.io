import React from 'react';
import classNames from 'classnames';

import './Raleway-Light.ttf';

import Typing from './typing';

import style from './app.css';

class App extends React.Component {
  state = {
    headerTexts: [
      "Hi, I'm Aki. this is my website. Learn more about me below.",
      'Aki Gao - 1 search result',
      'Aki Gao - 0 search result',
    ],
    headerTextsIndex: 0,
    pages: ['about', 'resume', 'projects'],
    renderInput: false,
  };

  onInputKeyUp = event => {
    if (this.autoCompleteTimeout) {
      clearTimeout(this.autoCompleteTimeout);
    }

    let didAutoComplete = false;

    const autoComplete = (value, startIndex) => {
      this.autoCompleteTimeout = setTimeout(() => {
        this.searchBar.value = value;
        this.searchBar.setSelectionRange(startIndex, value.length);
      }, 250);
    };

    this.state.pages.forEach(page => {
      const regex = new RegExp(`^${event.target.value}`);
      if (regex.test(page) && event.key !== 'Backspace') {
        didAutoComplete = true;
        autoComplete(page, event.target.value.length);
      }
    });

    if (didAutoComplete) {
      this.setState({
        headerTextsIndex: 1,
      });
    } else if (event.target.value !== '') {
      this.setState({
        headerTextsIndex: 2,
      });
    } else {
      this.setState({
        headerTextsIndex: 0,
      });
    }
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
          {this.state.renderInput ? (
            this.state.headerTexts[this.state.headerTextsIndex]
          ) : (
            <Typing
              characterDelay={50}
              punctuationDelay={500}
              onCompleteTyping={this.renderInput}
            >
              {this.state.headerTexts[0]}
            </Typing>
          )}
        </div>
        <input
          className={searchBar}
          type="text"
          placeholder="e.g., about, resume, projects"
          onKeyUp={this.onInputKeyUp}
          ref={input => {
            this.searchBar = input;
          }}
        />
      </div>
    );
  }
}

export default App;
