var NewsItem = React.createClass({
  propTypes: {
    newsItem: React.PropTypes.shape({
      index: React.PropTypes.number.isRequired,
      title: React.PropTypes.string.isRequired,
      published: React.PropTypes.string.isRequired,
      content: React.PropTypes.string.isRequired,
      comments: React.PropTypes.array.isRequired,
      isExpanded: React.PropTypes.bool.isRequired
    }).isRequired,
    toggleShow: React.PropTypes.func.isRequired
  },

  handleClick: function(ev) {
    this.props.toggleShow(ev, {index: this.props.newsItem.index})
  },

  render: function() {
    var className = 'news-item' + (this.props.newsItem.isExpanded ? '' : ' collapsed')

    return React.createElement('div', {className: className, key: this.props.newsItem.index},
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
    return React.createElement('div', {className: 'news-title', onClick: this.handleClick}, title)
  },

  renderContent: function() {
    return React.createElement('div', {className: 'news-content'}, this.props.newsItem.content)
  },

  renderComments: function() {
    return React.createElement(NewsComments, {comments: this.props.newsItem.comments})
  }
})
