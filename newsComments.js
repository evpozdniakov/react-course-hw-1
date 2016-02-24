var NewsComments = React.createClass({
  propTypes: {
    comments: React.PropTypes.arrayOf(React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
    })).isRequired
  },

  render: function() {
    return React.createElement('div', {className: 'news-comments'}, 'Комментариев: ' + this.props.comments.length)
  }
})