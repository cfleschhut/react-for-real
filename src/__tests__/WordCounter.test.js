import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import WordCounter from '../WordCounter';
import countWords from '../countWords';
import Editor from '../Editor';
import Counter from '../Counter';
import ProgressBar from '../ProgressBar';

describe('When I type some words', () => {
  const target = 10;
  const inputString = 'One two three four';
  const wordCounter = shallow(<WordCounter targetWordCount={target} />);
  const textarea = wordCounter
    .find(Editor)
    .dive()
    .find('textarea');
  textarea.simulate('change', { target: { value: inputString } });

  it('displays the correct count as a number', () => {
    const counter = wordCounter.find(Counter);

    expect(counter.prop('count')).toBe(countWords(inputString));
  });

  it('displays the correct progress', () => {
    const progress = wordCounter.find(ProgressBar);

    expect(progress.prop('completion')).toBe(countWords(inputString) / target);
  });
});
