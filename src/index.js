import React from 'react';
import ReactDOM from 'react-dom';
import WordCounter from './components/WordCounter/WordCounter';

ReactDOM.render(
  <WordCounter targetWordCount={10} />,
  document.getElementById('app'),
);
