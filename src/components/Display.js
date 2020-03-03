import React from 'react';
import PropTypes from 'prop-types';

/**
 * Result of Calculation
 * @param {String} result Result of Calculation
 * @return {Node} React Element
 */
const Display = ({ result }) => (
  <div>
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
