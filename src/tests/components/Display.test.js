import React from 'react';
import { render } from '@testing-library/react';
import App from '../../components/App';
import Display from '../../components/Display';

describe('ButtonPanel Component', () => {
  it('App Container exists', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('display')).toBeInTheDocument();
  });

  it('App not empty', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('display')).not.toBeEmpty();
  });

  it('It have 0 by default', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('display')).toHaveTextContent('0');
  });

  it('It change content depending the prop result', () => {
    const { queryByTestId } = render(<Display result="500" />);
    expect(queryByTestId('display')).toHaveTextContent('500');
  });
});
