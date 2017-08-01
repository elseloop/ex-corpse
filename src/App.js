import React, { Component } from 'react';
import CorpseBody from './CorpseBody';
import NewLineForm from './NewLineForm';
import VisibleLinesInput from './VisibleLinesInput';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        lines: [],
        linesToShow: 1,
        currentLine: '',
        showComplete: false
      }

      this.handleNewLineInput = this.handleNewLineInput.bind(this);
      this.handleNewLineSubmit = this.handleNewLineSubmit.bind(this);
      this.handleLinesToShowChange = this.handleLinesToShowChange.bind(this);
      this.handleToggleCompleteClick = this.handleToggleCompleteClick.bind(this);
  }

  handleNewLineInput(text) {
    this.setState({
      currentLine: text
    });
  }

  handleNewLineSubmit(text) {
    this.setState({
      fragments: this.state.lines.unshift(text),
      currentLine: ''
    });
  }

  handleLinesToShowChange(newNumber) {
    this.setState({
      linesToShow: newNumber
    });
  }

  handleToggleCompleteClick() {
    this.setState({
      showComplete: !this.state.showComplete
    })
  }

  render() {
    return (
      <div className="App">
          <h2>Exquisite Corpse Machine!</h2>
          <NewLineForm
            currentLine={this.state.currentLine}
            onNewLineInput={this.handleNewLineInput}
            onNewLineSubmit={this.handleNewLineSubmit}
          />
          <CorpseBody
            lines={this.state.lines}
            linesToShow={this.state.linesToShow}
            handleToggleClick={this.handleToggleCompleteClick}
            showComplete={this.state.showComplete}
          />
          <VisibleLinesInput
            onNumberChange={this.handleLinesToShowChange}
            linesToShow={this.state.linesToShow}
          />
      </div>
    );
  }
}

export default App;
