import React from 'react';

import Cursor from './cursor';

class Typing extends React.Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    if (!this.props.isFinished) {
      this.typeCharacter();
    }
  }

  componentDidUpdate() {
    if (this.state.index === this.props.children.length) {
      clearInterval(this.intervalID);
      setTimeout(() => {
        this.props.onCompleteTyping();
      }, 500);
    } else if (this.checkPunctuation()) {
      clearInterval(this.intervalID);
      setTimeout(() => {
        this.typeCharacter();
      }, this.props.punctuationDelay);
    }
  }

  checkPunctuation() {
    return /(\.|!|\?|;|,)/.test(
      this.props.children.charAt(this.state.index - 1)
    );
  }

  updateIndex() {
    this.setState({
      index: this.state.index + 1,
    });
  }

  typeCharacter() {
    this.intervalID = setInterval(
      () => this.updateIndex(),
      this.props.characterDelay
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.index === this.props.children.length ? (
          this.props.children
        ) : (
          <React.Fragment>
            {this.props.children.substring(0, this.state.index)}
            <Cursor />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Typing;
