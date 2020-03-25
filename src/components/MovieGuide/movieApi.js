const movies = [
  { title: 'Rebel without a Cause', date: 'Monday' },
  { title: 'Ghost in the Shell', date: 'Tuesday' },
  { title: 'High Noon', date: 'Monday' },
];

export function requestMovies() {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(movies);
    }, 1000),
  );
}
