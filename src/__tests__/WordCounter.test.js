import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import WordCounter from '../components/WordCounter/WordCounter';
import countWords from '../components/WordCounter/countWords';
import Editor from '../components/WordCounter/Editor';
import Counter from '../components/WordCounter/Counter';
import ProgressBar from '../components/WordCounter/ProgressBar';

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
