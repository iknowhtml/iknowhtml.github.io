import React, { Component } from 'react';

class Typing extends Component {
  state = {
    text: this.props.text,
    index: 0,
    characterDelay: this.props.characterDelay,
    punctuationDelay: this.props.punctuationDelay,
  };

  componentDidMount() {
    this.typeCharacter();
  }

  componentDidUpdate() {
    if (this.checkPunctuation()) {
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
    return <div>{this.state.text.substring(0, this.state.index)}</div>;
  }
}

export default Typing;
