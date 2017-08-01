import React, { Component } from 'react';

class VisibleLinesInput extends Component {
  constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleChange = (event) => {
    this.props.onNumberChange(event.target.value);
  }

  render() {
      return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="linesInput">Number of lines to show while writing?</label>
          <div className="InputGroup">
            <input
              id="linesInput"
              type="number"
              value={this.props.linesToShow}
              onChange={(e) => this.handleChange(e)}
            />
            <button className="accessibility">go</button>
          </div>
        </form>
      )
  }
}

export default VisibleLinesInput;
