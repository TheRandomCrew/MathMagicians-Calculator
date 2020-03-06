import operate from '../../logic/operate';

describe('src/logic/operate', () => {
  it('converts numbers with a point silently in floats', () => {
    expect(operate('12.', '+', 4)).toBe('16');
    expect(operate('12', '+', '4.')).toBe('16');
    expect(operate('.', '+', '4.')).toBe('4');
    expect(operate('.2', '+', '4.')).toBe('4.2');
    expect(operate('.2', '+', '4.4')).toBe('4.6');
  });

  it('sums 2 numbers', () => {
    expect(operate(1, '+', 2)).toBe('3');
    expect(operate(0, '+', 9)).toBe('9');
    expect(operate(100000, '+', 9)).toBe('100009');
    expect(operate(0, '+', 5)).toBe('5');
  });

  it('substract one number from other', () => {
    expect(operate(1, '-', 2)).toBe('-1');
    expect(operate(0, '-', 9)).toBe('-9');
    expect(operate(11, '-', 9)).toBe('2');
    expect(operate(5, '-', 2)).toBe('3');
    expect(operate(0.3, '-', 0.1)).toBe('0.2');
  });

  it('multiply 2 numbers', () => {
    expect(operate(5, 'X', 2)).toBe('10');
  });

  it('divides one number by other', () => {
    expect(operate(4, '÷', 2)).toBe('2');
    expect(operate(10, '÷', 2)).toBe('5');
  });

  it('returns first number when no operation given', () => {
    expect(operate(4, 2)).toBe('4');
  });

  it('returns first operand when invalid operation given', () => {
    expect(operate(10, '=', 2)).toBe('10');
  });

  it('return 0 when try to divide by 0', () => {
    expect(operate(10, '÷', '0')).toBe('0');
  });
});
