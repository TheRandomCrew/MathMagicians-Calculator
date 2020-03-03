import React from 'react';
import Button from './Button';
import css from '../style/ButtonPanel.module.css';

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
        <div key={Math.random()} data-testid={`group-${id + 1}`} className={css.group}>
          {
            group.map((name, i) => (
              <Button
                name={name}
                key={Math.random()}
                color={(id !== 4 || i !== 2) && i !== 3}
                wide={name === '0'}
              />
            ))
          }
        </div>
      ))
    }
  </div>
);

export default ButtonPanel;
