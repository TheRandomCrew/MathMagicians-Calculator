import calculate from '../../logic/calculate';

describe('src/logic/calculate', () => {
  const defaultState = { total: '0', operation: null, next: null };
  it('return default state if no operation and no input given', () => {
    expect(calculate(defaultState, null)).toStrictEqual(defaultState);
  });

  it('returns new `total` if just numeric input changed', () => {
    let expected = { total: '1', operation: null, next: null };
    expect(calculate(defaultState, '1')).toStrictEqual(expected);
    expect(calculate(expected, '2')).toStrictEqual({ ...expected, total: '12' });
    expected = { total: '12', operation: null, next: null };
    expect(calculate(expected, '.')).toStrictEqual({ ...expected, total: '12.' });
    expected = { total: '12.', operation: null, next: null };
    expect(calculate(expected, '2')).toStrictEqual({ ...expected, total: '12.2' });
  });

  it('change next when operator given and next present', () => {
    const newState = { total: '1', operation: null, next: null };
    const expected = { total: '1', operation: '+', next: null };
    expect(calculate(newState, '+')).toStrictEqual(expected);
  });

  it('change next when number input given and next and operator present', () => {
    const newState = { total: '1', operation: '+', next: null };
    const expected = { total: '1', operation: '+', next: '2' };
    expect(calculate(newState, '2')).toStrictEqual(expected);
    expect(calculate(expected, '3')).toStrictEqual({ ...expected, next: '23' });
    expect(calculate({ ...expected, next: '23' }, '.')).toStrictEqual({ ...expected, next: '23.' });
    expect(calculate({ ...expected, next: '23.' }, '4')).toStrictEqual({ ...expected, next: '23.4' });
  });

  it('change operation when operator given and operation and next present', () => {
    let newState = { total: '1', operation: '+', next: '30' };
    let expected = { total: '31', operation: '-', next: null };
    expect(calculate(newState, '-')).toStrictEqual(expected);
    newState = { ...expected, operation: 'X' };
    expect(calculate(expected, 'X')).toStrictEqual(newState);
    expected = { ...newState, operation: '÷' };
    expect(calculate(newState, '÷')).toStrictEqual(expected);
    newState = { ...expected, operation: '-' };
    expect(calculate(expected, '-')).toStrictEqual(newState);
  });

  it('return next null if total is 0 and operand given', () => {
    const newState = { total: '0', operation: null, next: null };
    const expected = { total: '0', operation: '+', next: null };
    expect(calculate(newState, '+')).toStrictEqual(expected);
  });

  it('return same state if invalid input given', () => {
    expect(calculate(defaultState, '*')).toStrictEqual(defaultState);
    const newState = { total: '1', operation: '-', next: '1' };
    expect(calculate(newState, '/')).toStrictEqual(newState);
  });

  it('return default state if modifier given with default state', () => {
    expect(calculate(defaultState, 'AC')).toStrictEqual(defaultState);
    expect(calculate(defaultState, '+/-')).toStrictEqual(defaultState);
    expect(calculate(defaultState, '%')).toStrictEqual(defaultState);
    expect(calculate(defaultState, '=')).toStrictEqual(defaultState);
  });

  it('return default state if AC given in any state', () => {
    expect(calculate(defaultState, 'AC')).toStrictEqual(defaultState);
    let newState = { total: '12.', operation: null, next: null };
    expect(calculate(newState, 'AC')).toStrictEqual(defaultState);
    newState = { total: '12.2', operation: '-', next: null };
    expect(calculate(newState, 'AC')).toStrictEqual(defaultState);
    newState = { total: '2', operation: 'X', next: '3' };
    expect(calculate(newState, 'AC')).toStrictEqual(defaultState);
    newState = { total: '56', operation: '=', next: null };
    expect(calculate(newState, 'AC')).toStrictEqual(defaultState);
  });

  it('return inverted signed value if +/- given without next', () => {
    let newState = { total: '12.', operation: null, next: null };
    let expected = { total: '-12', operation: '+/-', next: null };
    expect(calculate(newState, '+/-')).toStrictEqual(expected);
    newState = { total: '-5', operation: null, next: null };
    expected = { total: '5', operation: '+/-', next: null };
    expect(calculate(newState, '+/-')).toStrictEqual(expected);
    newState = { total: '12.', operation: '+', next: null };
    expected = { total: '-12', operation: '+/-', next: null };
    expect(calculate(newState, '+/-')).toStrictEqual(expected);
    newState = { total: '-5', operation: 'X', next: null };
    expected = { total: '5', operation: '+/-', next: null };
    expect(calculate(newState, '+/-')).toStrictEqual(expected);
  });

  it('apply for next +/- given total and operation', () => {
    let newState = { total: '12.', operation: '+', next: '2.0' };
    let expected = { total: '12.', operation: '+/-', next: '-2' };
    expect(calculate(newState, '+/-')).toStrictEqual(expected);
    newState = { total: '-5', operation: 'X', next: '2' };
    expected = { total: '-5', operation: '+/-', next: '-2' };
    expect(calculate(newState, '+/-')).toStrictEqual(expected);
  });

  it('return percentage of total if no other state given', () => {
    let newState = { total: '12.', operation: null, next: null };
    let expected = { total: '0.12', operation: '%', next: null };
    expect(calculate(newState, '%')).toStrictEqual(expected);
    newState = { total: '-5', operation: null, next: null };
    expected = { total: '-0.05', operation: '%', next: null };
    expect(calculate(newState, '%')).toStrictEqual(expected);
  });

  it('return total inverted if next given but no operation', () => {
    const newState = { total: '12.', operation: null, next: '2' };
    const expected = { total: '-12', operation: '+/-', next: null };
    expect(calculate(newState, '+/-')).toStrictEqual(expected);
  });

  it('return percentage of total if operator given but no next', () => {
    let newState = { total: '12.', operation: '+', next: null };
    let expected = { total: '0.12', operation: '%', next: null };
    expect(calculate(newState, '%')).toStrictEqual(expected);
    newState = { total: '-5', operation: 'X', next: null };
    expected = { total: '-0.05', operation: '%', next: null };
    expect(calculate(newState, '%')).toStrictEqual(expected);
  });

  it('return percentage of total if total, operator and next given', () => {
    let newState = { total: '12.', operation: '+', next: '18' };
    let expected = { total: '0.3', operation: '%', next: null };
    expect(calculate(newState, '%')).toStrictEqual(expected);
    newState = { total: '5', operation: 'X', next: '20' };
    expected = { total: '1', operation: '%', next: null };
    expect(calculate(newState, '%')).toStrictEqual(expected);
    newState = { total: '12.', operation: '-', next: '8' };
    expected = { total: '0.04', operation: '%', next: null };
    expect(calculate(newState, '%')).toStrictEqual(expected);
    newState = { total: '12.', operation: '÷', next: '4' };
    expected = { total: '0.03', operation: '%', next: null };
    expect(calculate(newState, '%')).toStrictEqual(expected);
  });

  it('return same total but = as operand if total not 0', () => {
    const newState = { total: '12.', operation: null, next: null };
    const expected = { total: '12.', operation: '=', next: null };
    expect(calculate(newState, '=')).toStrictEqual(expected);
  });

  it('return null next if next given with no operand', () => {
    const newState = { total: '12.', operation: null, next: '2' };
    const expected = { total: '12.', operation: '=', next: null };
    expect(calculate(newState, '=')).toStrictEqual(expected);
  });

  it('return correct total if operand and next given', () => {
    const newState = { total: '12.', operation: '+', next: '2' };
    const expected = { total: '14', operation: '=', next: null };
    expect(calculate(newState, '=')).toStrictEqual(expected);
  });
});
