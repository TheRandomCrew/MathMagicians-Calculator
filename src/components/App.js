import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import css from '../style/App.module.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  }

  render() {
    const { handleClick, state: { next, total } } = this;
    return (
      <div data-testid="app" className={css.container}>
        <Display
          result={next || total}
        />
        <ButtonPanel onClick={handleClick} />
      </div>
    );
  }
}
