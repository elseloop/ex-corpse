import React, { Component } from 'react';

class NewLineForm extends Component {
  constructor(props) {
      super(props);

      this.state = {
        newLine: ''
      }

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newValue = event.target.value;

    if ( newValue === '' || newValue === 'undefined' ) return;

    this.props.onNewLineInput(newValue);

    this.setState({
      newLine: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.newLineInput, this.newLineInput.value);

    if ( this.newLineInput.value === '' || this.newLineInput.value === 'undefined' || this.newLineInput.value.trim() === '' ) {
      return;
    }

    this.props.onNewLineSubmit(this.state.newLine);

    this.setState({
      newLine: ''
    })
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label
          className="accessibility"
          htmlFor="newLineInput"
        >New line here...</label>
        <div className="InputGroup">
          <input
            ref={(input) => {this.newLineInput = input}}
            id="newLineInput"
            type="text"
            value={this.props.currentLine}
            onChange={(e) => this.handleChange(e)}
            placeholder="Hope is the thing with feathers..."
          />
          <button type="submit">add line</button>
        </div>
      </form>
    )
  }
}

export default NewLineForm
