import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div data-testid="app">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
