var Movies = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var movies = this.props.items.map(function(movie) {
        return React.createElement(Movie, {item: movie, key: movie.id});
    });

    return (
      React.createElement('div', {className: 'moviesList'}, movies)
    );
  }
});
