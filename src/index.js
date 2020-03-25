import React from 'react';
import ReactDOM from 'react-dom';
import WordCounter from './components/WordCounter/WordCounter';

import { Provider } from 'react-redux';
import store from './components/MovieGuide/store';
import { requestMovies } from './components/MovieGuide/movieApi';
import { MOVIES_LOADED } from './components/MovieGuide/actions';
import Filter from './components/MovieGuide/Filter';
import MovieList from './components/MovieGuide/MovieList';

requestMovies().then(movies => {
  store.dispatch({ type: MOVIES_LOADED, movies });
});

const movieLists = ['Monday', 'Tuesday'].map(date => (
  <MovieList key={date} date={date} />
));

ReactDOM.render(
  <>
    <WordCounter targetWordCount={10} />

    <Provider store={store}>
      <main className="ph6 pv4 sans-serif">
        <h1 className="mt0">Programme</h1>
        <Filter name="filter" label="Just favorites" />
        <div className="flex flex-row">{movieLists}</div>
      </main>
    </Provider>
  </>,
  document.getElementById('app'),
);
