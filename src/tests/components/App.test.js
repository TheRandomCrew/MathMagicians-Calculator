import React from 'react';
import { render } from '@testing-library/react';
import App from '../../components/App';

describe('ButtonPanel Component', () => {
  it('App Container exists', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('app')).toBeInTheDocument();
  });

  it('App not empty', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('app')).not.toBeEmpty();
  });
});
