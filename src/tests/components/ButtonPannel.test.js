import React from 'react';
import { render } from '@testing-library/react';
import App from '../../components/App';

describe('ButtonPanel Component', () => {
  it('ButtonPanel Container exists', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('button-panel')).toBeInTheDocument();
  });

  it('ButtonPanel Container non empty', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('button-panel')).not.toBeEmpty();
  });

  it('All groups exist', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('group-1')).toBeInTheDocument();
    expect(queryByTestId('group-2')).toBeInTheDocument();
    expect(queryByTestId('group-3')).toBeInTheDocument();
    expect(queryByTestId('group-4')).toBeInTheDocument();
    expect(queryByTestId('group-5')).toBeInTheDocument();
  });

  it('Contains all Buttons by group', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('group-1')).toContainElement(queryByTestId('AC'));
    expect(queryByTestId('group-1')).toContainElement(queryByTestId('+/-'));
    expect(queryByTestId('group-1')).toContainElement(queryByTestId('%'));
    expect(queryByTestId('group-1')).toContainElement(queryByTestId('÷'));
    expect(queryByTestId('group-2')).toContainElement(queryByTestId('7'));
    expect(queryByTestId('group-2')).toContainElement(queryByTestId('8'));
    expect(queryByTestId('group-2')).toContainElement(queryByTestId('9'));
    expect(queryByTestId('group-2')).toContainElement(queryByTestId('X'));
    expect(queryByTestId('group-3')).toContainElement(queryByTestId('4'));
    expect(queryByTestId('group-3')).toContainElement(queryByTestId('5'));
    expect(queryByTestId('group-3')).toContainElement(queryByTestId('6'));
    expect(queryByTestId('group-3')).toContainElement(queryByTestId('-'));
    expect(queryByTestId('group-4')).toContainElement(queryByTestId('1'));
    expect(queryByTestId('group-4')).toContainElement(queryByTestId('2'));
    expect(queryByTestId('group-4')).toContainElement(queryByTestId('3'));
    expect(queryByTestId('group-4')).toContainElement(queryByTestId('+'));
    expect(queryByTestId('group-5')).toContainElement(queryByTestId('0'));
    expect(queryByTestId('group-5')).toContainElement(queryByTestId('.'));
    expect(queryByTestId('group-5')).toContainElement(queryByTestId('='));
  });
});
