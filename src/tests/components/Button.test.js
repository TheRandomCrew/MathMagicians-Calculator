import React from 'react';
import { render } from '@testing-library/react';
import App from '../../components/App';


describe('Button component', () => {
  it('All buttons exists', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('AC')).toBeInTheDocument();
    expect(queryByTestId('+/-')).toBeInTheDocument();
    expect(queryByTestId('%')).toBeInTheDocument();
    expect(queryByTestId('+')).toBeInTheDocument();
    expect(queryByTestId('7')).toBeInTheDocument();
    expect(queryByTestId('8')).toBeInTheDocument();
    expect(queryByTestId('9')).toBeInTheDocument();
    expect(queryByTestId('X')).toBeInTheDocument();
    expect(queryByTestId('4')).toBeInTheDocument();
    expect(queryByTestId('5')).toBeInTheDocument();
    expect(queryByTestId('6')).toBeInTheDocument();
    expect(queryByTestId('-')).toBeInTheDocument();
    expect(queryByTestId('1')).toBeInTheDocument();
    expect(queryByTestId('2')).toBeInTheDocument();
    expect(queryByTestId('3')).toBeInTheDocument();
    expect(queryByTestId('+')).toBeInTheDocument();
    expect(queryByTestId('0')).toBeInTheDocument();
    expect(queryByTestId('.')).toBeInTheDocument();
    expect(queryByTestId('=')).toBeInTheDocument();
  });

  it('Is not empty', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('AC')).not.toBeEmpty();
    expect(queryByTestId('+/-')).not.toBeEmpty();
    expect(queryByTestId('%')).not.toBeEmpty();
    expect(queryByTestId('÷')).not.toBeEmpty();
    expect(queryByTestId('7')).not.toBeEmpty();
    expect(queryByTestId('8')).not.toBeEmpty();
    expect(queryByTestId('9')).not.toBeEmpty();
    expect(queryByTestId('X')).not.toBeEmpty();
    expect(queryByTestId('4')).not.toBeEmpty();
    expect(queryByTestId('5')).not.toBeEmpty();
    expect(queryByTestId('6')).not.toBeEmpty();
    expect(queryByTestId('-')).not.toBeEmpty();
    expect(queryByTestId('1')).not.toBeEmpty();
    expect(queryByTestId('2')).not.toBeEmpty();
    expect(queryByTestId('3')).not.toBeEmpty();
    expect(queryByTestId('+')).not.toBeEmpty();
    expect(queryByTestId('0')).not.toBeEmpty();
    expect(queryByTestId('.')).not.toBeEmpty();
    expect(queryByTestId('=')).not.toBeEmpty();
  });

  it('All buttons have correct content', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('AC')).toHaveTextContent('AC');
    expect(queryByTestId('+/-')).toHaveTextContent('+/-');
    expect(queryByTestId('%')).toHaveTextContent('%');
    expect(queryByTestId('+')).toHaveTextContent('+');
    expect(queryByTestId('7')).toHaveTextContent('7');
    expect(queryByTestId('8')).toHaveTextContent('8');
    expect(queryByTestId('9')).toHaveTextContent('9');
    expect(queryByTestId('X')).toHaveTextContent('X');
    expect(queryByTestId('4')).toHaveTextContent('4');
    expect(queryByTestId('5')).toHaveTextContent('5');
    expect(queryByTestId('6')).toHaveTextContent('6');
    expect(queryByTestId('-')).toHaveTextContent('-');
    expect(queryByTestId('1')).toHaveTextContent('1');
    expect(queryByTestId('2')).toHaveTextContent('2');
    expect(queryByTestId('3')).toHaveTextContent('3');
    expect(queryByTestId('+')).toHaveTextContent('+');
    expect(queryByTestId('0')).toHaveTextContent('0');
    expect(queryByTestId('.')).toHaveTextContent('.');
    expect(queryByTestId('=')).toHaveTextContent('=');
  });

  it('All buttons have type button', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('AC')).toHaveAttribute('type', 'button');
    expect(queryByTestId('+/-')).toHaveAttribute('type', 'button');
    expect(queryByTestId('%')).toHaveAttribute('type', 'button');
    expect(queryByTestId('+')).toHaveAttribute('type', 'button');
    expect(queryByTestId('7')).toHaveAttribute('type', 'button');
    expect(queryByTestId('8')).toHaveAttribute('type', 'button');
    expect(queryByTestId('9')).toHaveAttribute('type', 'button');
    expect(queryByTestId('X')).toHaveAttribute('type', 'button');
    expect(queryByTestId('4')).toHaveAttribute('type', 'button');
    expect(queryByTestId('5')).toHaveAttribute('type', 'button');
    expect(queryByTestId('6')).toHaveAttribute('type', 'button');
    expect(queryByTestId('-')).toHaveAttribute('type', 'button');
    expect(queryByTestId('1')).toHaveAttribute('type', 'button');
    expect(queryByTestId('2')).toHaveAttribute('type', 'button');
    expect(queryByTestId('3')).toHaveAttribute('type', 'button');
    expect(queryByTestId('+')).toHaveAttribute('type', 'button');
    expect(queryByTestId('0')).toHaveAttribute('type', 'button');
    expect(queryByTestId('.')).toHaveAttribute('type', 'button');
    expect(queryByTestId('=')).toHaveAttribute('type', 'button');
  });
});
