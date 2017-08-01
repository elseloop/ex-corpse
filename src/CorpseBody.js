import React, { Component } from 'react';
import takeright from 'lodash.takeright';

class CorpseBody extends Component {
  constructor(props) {
      super(props);

      this.state = {
        toggled: null,
        poem: this.props.lines
      }

      this.toggleEditing = this.toggleEditing.bind(this);
      this.renderBody = this.renderBody.bind(this);
  }

  toggleEditing = (event) => {
    event.preventDefault();

    if ( this.state.toggled ) {
      this.setState({
        reversed: !this.state.reversed
      })
    }

    this.setState({
      toggled: !this.state.toggled
    })


    this.props.handleToggleClick();

  }

  renderBody = () => {
    const reversedLinesCopy = this.state.poem.slice().reverse();
    const linesCopy = this.state.poem.slice();
    const hiddenDisplay = takeright(linesCopy.reverse(), this.props.linesToShow);
    const displayLines = this.state.toggled ? reversedLinesCopy : hiddenDisplay;

    return displayLines.map((line, i) => {
      return (
        <span key={i}>
          {line}
          <br />
        </span>
      )
    });


  }

  render() {
    const toggleText = this.props.showComplete ? 'Hide' : 'Show All';


    return (
      <div>
        <div className="CorpseBody">
          <p>
            {this.renderBody()}
          </p>
        </div>
        <button type="button" onClick={(e) => this.toggleEditing(e)}>{toggleText}</button>
      </div>
    )
  }
}

export default CorpseBody;
