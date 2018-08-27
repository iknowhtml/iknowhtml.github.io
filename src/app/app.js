import React from 'react';
import classNames from 'classnames';

import './Raleway-Light.ttf';

import Header from './header';

import style from './app.css';

class App extends React.Component {
  state = {
    headers: [
      "Hi, I'm Aki. this is my website. Learn more about me below.",
      'Aki Gao - 1 search result',
      'Aki Gao - 0 search result',
    ],
    headerIndex: 0,
    pages: ['about', 'resume', 'projects'],
    typingComplete: false,
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
        headerIndex: 1,
      });
    } else if (event.target.value !== '') {
      this.setState({
        headerIndex: 2,
      });
    } else {
      this.setState({
        headerIndex: 0,
      });
    }
  };

  onCompleteTyping = () => {
    this.setState({ typingComplete: true });
    this.searchBar.focus();
  };

  render() {
    const searchBar = classNames({
      [style.searchBar]: true,
      [style.hide]: this.state.typingComplete ? false : true,
    });

    return (
      <div className={style.container}>
        <Header
          typingComplete={this.state.typingComplete}
          onCompleteTyping={this.onCompleteTyping}
        >
          {this.state.headers[this.state.headerIndex]}
        </Header>
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
