import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('sanity check should be OK', () => {
  expect(2).toEqual(2);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
