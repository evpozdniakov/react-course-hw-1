var NewsComments = React.createClass({
  propTypes: {
    toggleNewsComments: React.PropTypes.func.isRequired,
    comments: React.PropTypes.array.isRequired
  },

  toggleComments: function() {
    this.props.toggleNewsComments();
  },

  render: function() {
    if (this.props.comments.length === 0) {
      return null      
    }

    var props = {
      className: 'news-comments',
    }

    return React.createElement('div', props,
      this.renderToggle(),
      this.renderList()
    )
  },

  renderToggle: function() {
    var props = {
      className: 'comments-toggle',
      onClick: this.toggleComments
    }

    return React.createElement('div', props, 'Комментариев: ' + this.props.comments.length)
  },

  renderList: function() {
    var commentElms = this.props.comments.map(function(comment, index) {
      var props = {
        key: index,
        author: comment.author,
        text: comment.text
      }

      return React.createElement(NewsComment, props)
    })

    var props = {
      className: 'comment-list'
    }

    return React.createElement('div', props, commentElms)
  }
})
