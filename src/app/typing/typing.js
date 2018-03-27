import React from 'react';

import Cursor from './cursor';

class Typing extends React.Component {
  state = {
    text: this.props.children,
    index: this.props.isFinished ? this.props.children.length : 0,
    isFinished: this.props.isFinished,
    characterDelay: this.props.characterDelay,
    punctuationDelay: this.props.punctuationDelay,
  };

  componentDidMount() {
    this.typeCharacter();
  }

  componentDidUpdate() {
    if (
      this.state.index === this.state.text.length &&
      this.state.isFinished === false
    ) {
      clearInterval(this.intervalID);
      this.setState({ isFinished: true });
      setTimeout(() => {
        this.props.onCompleteTyping();
      }, 500);
    } else if (this.checkPunctuation()) {
      clearInterval(this.intervalID);
      setTimeout(() => {
        this.typeCharacter();
      }, this.state.punctuationDelay);
    }
  }

  checkPunctuation() {
    return /(\.|!|\?|;|,)/.test(this.state.text.charAt(this.state.index - 1));
  }

  updateIndex() {
    this.setState({
      index: this.state.index + 1,
    });
  }

  typeCharacter() {
    this.intervalID = setInterval(
      () => this.updateIndex(),
      this.state.characterDelay
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isFinished ? (
          this.state.text
        ) : (
          <React.Fragment>
            {this.state.text.substring(0, this.state.index)}
            <Cursor />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Typing;
