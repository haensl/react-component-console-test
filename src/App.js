import React, { Component } from 'react';
import Console from 'react-component-console';
import './App.css';

const initialLines = [
  'Hi!',
  'How are you today?'
];
class App extends Component {
  constructor() {
    super();
    this.onFinishWritingLines = this.onFinishWritingLines.bind(this);
    this.onFinishWritingLine = this.onFinishWritingLine.bind(this);
    this.onAppendCheckboxChange = this.onAppendCheckboxChange.bind(this);
    this.resetConsole = this.resetConsole.bind(this);
    this.updateLines = this.updateLines.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
    this.state= {
      textarea: initialLines.join('\n'),
      lines: initialLines,
      append: false
    };
  }

  onFinishWritingLine(line) {
    console.info('finished writing line', line);
  }

  onFinishWritingLines() {
    console.info('finished writing lines.')
  }

  onAppendCheckboxChange(event) {
    const value = event.target.checked;
    this.setState({
      append: value
    });
  }

  resetConsole() {
    const self = this;
    this.setState({
      lines: []
    }, () => {
      self.setState({
        lines: initialLines
      })
    });
  }

  updateLines() {
    this.setState({
      lines: this.state.textarea.split('\n')
    });
  }

  onTextAreaChange(event) {
    const value = event.target.value;
    this.setState({
      textarea: value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            <a href="https://npmjs.com/package/react-component-console"
              target="_blank"
              rel="noopener noreferrer">react-component-console</a>
          </h1>
        </header>
        <div className="App-badgeBar">
          <img src="https://badge.fury.io/js/react-component-console.svg"
            height="20"
            width="120" />
          <img src="https://www.travis-ci.org/haensl/rollup-plugin-local-resolve.svg?branch=master"
            height="20"
            width="90" />
        </div>
        <Console
          lines={
            this.state.lines
          }
          onFinishWritingLine={
            this.onFinishWritingLine
          }
          onFinishWritingLines={
            this.onFinishWritingLines
          }
          console={{
            append: this.state.append
          }}
        />
        <textarea rows="5"
          cols="33"
          value={ this.state.textarea }
          onChange={ this.onTextAreaChange }
          onBlur={ this.updateLines }
        />
        <div className="App-controls">
          <label>Append lines
            <input type="checkbox"
              onChange={ this.onAppendCheckboxChange }
              checked={ this.state.append }
            />
          </label>
          <button onClick={ this.resetConsole }>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
