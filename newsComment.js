var NewsComment = React.createClass({
  propTypes: {
    author: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
  },

  render: function() {
    if (this.props.text.length === 0) {
      return null;      
    }

    return React.createElement('div', {className: 'news-comment'},
      this.renderAuthor(),
      this.renderText()
    )
  },

  renderAuthor: function() {
    return React.createElement('div', {className: 'comment-author'}, this.props.author)
  },

  renderText: function() {
    return React.createElement('div', {className: 'comment-text'}, this.props.text)
  }
})
