import operate from './operate';

const operands = ['+', 'X', '-', '÷'];

const numericInput = (data, number) => {
  const { total, operation, next } = data;
  let numberA = total;
  let numberB = next;
  if (operands.includes(operation)) {
    if (!next) numberB = '';
    numberB += number;
  } else {
    if (total === '0') numberA = '';
    numberA += number;
  }
  return {
    total: numberA,
    operation,
    next: numberB,
  };
};

const operandInput = (data, symbol) => {
  const { total, operation, next } = data;
  let numberA = total;
  let symbolOnWait = operation;
  let numberB = next;
  if (total !== '0') {
    if (next) {
      numberA = operate(total, symbolOnWait, next);
      numberB = null;
    }
  } else {
    numberB = null;
  }
  symbolOnWait = symbol;
  return {
    total: numberA,
    operation: symbolOnWait,
    next: numberB,
  };
};

const modifierInput = (data, modifier) => {
  const { total, operation, next } = data;
  let numberA = total;
  let symbolOnWait = operation;
  let numberB = next;

  if (modifier === 'AC') {
    numberA = '0';
    symbolOnWait = null;
    numberB = null;
  }

  if (modifier === '+/-') {
    if (next) {
      if (operands.includes(operation)) {
        numberB = operate(next, 'X', -1);
      } else {
        numberA = operate(total, 'X', -1);
        numberB = null;
      }
      symbolOnWait = modifier;
    } else {
      if (total !== '0') {
        symbolOnWait = modifier;
      }
      numberA = operate(total, 'X', -1);
    }
  }

  if (modifier === '%') {
    if (next) {
      numberA = operate(total, operation, next);
      numberA = operate(numberA, '÷', 100);
      numberB = null;
      symbolOnWait = modifier;
    } else {
      if (total !== '0') {
        symbolOnWait = modifier;
      }
      numberA = operate(numberA, '÷', 100);
    }
  }

  if (modifier === '=') {
    if (next) {
      if (operands.includes(operation)) {
        numberA = operate(total, operation, next);
      }
      numberB = null;
      symbolOnWait = modifier;
    }
    if (total !== '0') symbolOnWait = modifier;
  }

  return {
    total: numberA,
    operation: symbolOnWait,
    next: numberB,
  };
};

const calculate = (data, button) => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  if (numbers.includes(button)) {
    return numericInput(data, button);
  }
  if (operands.includes(button)) {
    return operandInput(data, button);
  }
  const modifiers = ['AC', '+/-', '%', '='];
  if (modifiers.includes(button)) {
    return modifierInput(data, button);
  }
  return data;
};

export default calculate;
