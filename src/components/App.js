import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import css from '../style/App.module.css';
import calculate from '../logic/calculate';

const defaultState = { total: '0', operation: null, next: null };

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  constructor() {
    super();
    this.calculation = calculate(defaultState);
  }

  render() {
    return (
      <div data-testid="app" className={css.container}>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
