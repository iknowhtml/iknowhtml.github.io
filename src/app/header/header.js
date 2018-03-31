import React from 'react';

import Typing from '../typing';

import style from './header.css';

class Header extends React.Component {
  componentDidUpdate() {
    console.log('did update');
  }
  render() {
    return (
      <div className={style.header}>
        {this.props.typingComplete ? (
          this.props.children
        ) : (
          <Typing
            characterDelay={50}
            punctuationDelay={500}
            onCompleteTyping={this.props.onCompleteTyping}
          >
            {this.props.children}
          </Typing>
        )}
      </div>
    );
  }
}

export default Header;
