var NewsComments = React.createClass({
  propTypes: {
    toggleNewsComments: React.PropTypes.func.isRequired,
    comments: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired
    })).isRequired
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
    var commentElms = this.props.comments.map(function(comment) {
      var props = {
        key: comment.id,
        comment: comment
      }

      return React.createElement(NewsComment, props)
    })

    var props = {
      className: 'comment-list'
    }

    return React.createElement('div', props, commentElms)
  }
})
