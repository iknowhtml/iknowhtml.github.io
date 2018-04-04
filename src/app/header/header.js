import React from 'react';
import { findDOMNode } from 'react-dom';

import classNames from 'classnames';

import Typing from '../typing';

import style from './header.css';

class Header extends React.Component {
  state = {
    active: true,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.children !== this.props.children) {
      this.setState({ active: false }, () => {
        findDOMNode(this).offsetHeight;
        this.setState({ active: true });
      });
    }
  }

  render() {
    const header = classNames(style.header, {
      [style.active]: this.state.active,
    });

    return (
      <div className={header}>
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
