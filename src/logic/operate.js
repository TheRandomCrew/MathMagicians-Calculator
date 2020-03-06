import Big from 'big-js';

/**
 * Perform a simple binary math operation
 * like the ones you found in a Basic Calculator
 * @param {String|Number} numberOne First Operand
 * @param {String} operation Valid operator for a Basic Calculator
 * @param {String|Number} numberTwo Second Operand
 * @returns {String} Numeric answer as String (because of `big-js` constrain)
 */
const operate = (numberOne, operation, numberTwo) => {
  if (!['+', '-', 'X', '÷'].includes(operation)) {
    return numberOne.toString();
  }
  let operand = numberOne;
  if (numberOne.toString().match('^\\.')) {
    operand = `0${numberOne}`;
  }
  operand = Big(operand);
  return {
    '÷': numberTwo === '0' || numberTwo === 0 ? '0'
      : operand.div(numberTwo).toString(),
    '+': operand.plus(numberTwo),
    '-': operand.minus(numberTwo),
    X: operand.times(numberTwo),
  }[operation].toString();
};

export default operate;
