var NewsItem = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    published: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    comments: React.PropTypes.array.isRequired,
    index: React.PropTypes.number.isRequired,
    toggleShow: React.PropTypes.func.isRequired,
    isExpanded: React.PropTypes.bool.isRequired
  },

  handleClick: function(ev) {
    this.props.toggleShow(ev, {index: this.props.index})
  },

  render: function() {
    var className = 'news-item' + (this.props.isExpanded ? '' : ' collapsed')

    return React.createElement('div', {className: className, key: this.props.key}, [
      this.renderDate(),
      this.renderTitle(),
      this.renderContent(),
      this.renderComments(),
    ])
  },

  renderDate: function() {
    return React.createElement('div', {className: 'news-date'}, this.props.published)
  },

  renderTitle: function() {
    var title = React.createElement('span', {}, this.props.title);
    return React.createElement('div', {className: 'news-title', onClick: this.handleClick}, title)
  },

  renderContent: function() {
    return React.createElement('div', {className: 'news-content'}, this.props.content)
  },

  renderComments: function() {
    return React.createElement(NewsComments, {comments: this.props.comments})
  }
})
