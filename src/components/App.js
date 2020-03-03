import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import css from '../style/App.module.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div data-testid="app" className={css.container}>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
