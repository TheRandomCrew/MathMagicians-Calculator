import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button of calculator
 * @param {String} name Name of the Button
 * @return {Node} React Element
 */
const Button = ({ name }) => (
  <button type="button">
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
