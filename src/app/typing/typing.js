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
    this.typeCharacter();
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
    if (this.state.index < this.state.text.length) {
      console.time(this.state.text[this.state.index]);
      setTimeout(() => {
        this.updateIndex();
        console.timeEnd(this.state.text[this.state.index]);
      }, this.checkPunctuation() ? this.state.punctuationDelay : this.state.characterDelay);
    }
  }

  render() {
    return <div>{this.state.text.substring(0, this.state.index)}</div>;
  }
}

export default Typing;
