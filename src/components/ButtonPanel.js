import React from 'react';
import Button from './Button';

const buttons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

/**
 * The calculator panel with all the buttons
 * @return {Node} React Element
 */
const ButtonPanel = () => (
  <div data-testid="button-panel">
    {
      buttons.map((group, id) => (
        <div key={Math.random()} data-testid={`group-${id + 1}`}>
          {group.map(name => <Button name={name} key={Math.random()} />)}
        </div>
      ))
    }
  </div>
);

export default ButtonPanel;
