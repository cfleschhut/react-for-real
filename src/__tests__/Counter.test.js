import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../Counter';

describe('A counter', () => {
  it('Displays the count and a label', () => {
    const counter = renderer.create(<Counter count={34} />);
    expect(counter.toJSON()).toMatchSnapshot();
  });
});
