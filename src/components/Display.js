import React from 'react';
import PropTypes from 'prop-types';
import css from '../style/Display.module.css';

/**
 * Result of Calculation
 * @param {String} result Result of Calculation
 * @return {Node} React Element
 */
const Display = ({ result }) => (
  <div data-testid="display" className={css.display}>
    {result}
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
export default Display;
