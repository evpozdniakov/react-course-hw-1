var NewsItem = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    published: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired,
    toggleShow: React.PropTypes.func.isRequired,
    isExpanded: React.PropTypes.bool.isRequired
  },

  handleClick: function(ev) {
    this.props.toggleShow(ev, {index: this.props.index})
  },

  render: function() {
    var className = 'news-item' + (this.props.isExpanded ? '' : ' collapsed')

    return React.createElement('div', {className: className}, [
      this.renderDate(),
      this.renderTitle(),
      this.renderContent(),
    ])
  },

  renderDate: function() {
    return React.createElement('div', {className: 'news-date'}, this.props.published)
  },

  renderTitle: function() {
    var title = this.props.title;

    if (!this.props.isExpanded && title.length > 50) {
      title = title.substr(0, 50) + '…'
    }

    return React.createElement('div', {className: 'news-title', onClick: this.handleClick}, title)
  },

  renderContent: function() {
    return React.createElement('div', {className: 'news-content'}, this.props.content)
  }
})
