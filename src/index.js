import React from 'react';
import ReactDOM from 'react-dom';
import WordCounter from './components/WordCounter/WordCounter';

import store from './components/MovieGuide/store';
import { requestMovies } from './components/MovieGuide/movieApi';
import { MOVIES_LOADED } from './components/MovieGuide/actions';

requestMovies().then(movies => {
  store.dispatch({ type: MOVIES_LOADED, movies });
});

ReactDOM.render(
  <WordCounter targetWordCount={10} />,
  document.getElementById('app'),
);
