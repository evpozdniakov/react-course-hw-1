var NewsItem = React.createClass({
  propTypes: {
    newsItem: React.PropTypes.shape({
      index: React.PropTypes.number.isRequired,
      title: React.PropTypes.string.isRequired,
      published: React.PropTypes.string.isRequired,
      content: React.PropTypes.string.isRequired,
      comments: React.PropTypes.array.isRequired,
      isExpanded: React.PropTypes.bool.isRequired,
      commentsShown: React.PropTypes.bool.isRequired
    }).isRequired,
    toggleNewsContent: React.PropTypes.func.isRequired,
    toggleNewsComments: React.PropTypes.func.isRequired,
  },

  handleTitleClick: function(ev) {
    this.props.toggleNewsContent(ev, {index: this.props.newsItem.index})
  },

  handleCommentsClick: function() {
    this.props.toggleNewsComments()
  },

  render: function() {
    var className = 'news-item';

    if (!this.props.newsItem.isExpanded) {
      className += ' collapsed'
    }
    else if (this.props.newsItem.commentsShown) {
      className += ' with-comments'
    }

    return React.createElement('div', {className: className},
      this.renderDate(),
      this.renderTitle(),
      this.renderContent(),
      this.renderComments()
    )
  },

  renderDate: function() {
    return React.createElement('div', {className: 'news-date'}, this.props.newsItem.published)
  },

  renderTitle: function() {
    var title = React.createElement('span', {}, this.props.newsItem.title);
    var props = {
      className: 'news-title',
      onClick: this.handleTitleClick
    }

    return React.createElement('div', props, title)
  },

  renderContent: function() {
    return React.createElement('div', {className: 'news-content'}, this.props.newsItem.content)
  },

  renderComments: function() {
    var props = {
      comments: this.props.newsItem.comments,
      toggleNewsComments: this.handleCommentsClick
    }
    return React.createElement(NewsComments, props)
  }
})
