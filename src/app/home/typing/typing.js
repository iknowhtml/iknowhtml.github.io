import React from 'react';

import Cursor from './cursor';

class Typing extends React.Component {
  state = {
    text: this.props.children,
    index: 0,
    isFinished: false,
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
      setTimeout(() => {
        this.setState({ isFinished: true });
        this.props.setRenderInputTrue();
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
        {this.state.text.substring(0, this.state.index)}
        {this.state.isFinished === false ? <Cursor /> : null}
      </React.Fragment>
    );
  }
}

export default Typing;
