var Movie = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {className: 'movieItem'},
        React.createElement('h2', {}, this.props.item.title),
        React.createElement('p', {}, this.props.item.year),
        React.createElement('p', {}, this.props.item.desc),
        React.createElement('img', {src: this.props.item.poster, alt: this.props.item.title, height: 400}),
      )
    )
  },
});
