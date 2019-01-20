var movies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    year: '1994',
    desc: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    poster: './sr.jpg',
  },
  {
    id: 2,
    title: 'Se7en',
    year: '1995',
    desc: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
    poster: './seven.jpg'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.year),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.poster, alt: movie.title, height: 400}),
  );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));
