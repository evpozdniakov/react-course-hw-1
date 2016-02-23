var NewsItem = React.createClass({
  getInitialState: function() {
    return {
      isCollapsed: true
    }
  },

  toggleShow: function() {
    this.setState({isCollapsed: !this.state.isCollapsed})
  },

  render: function() {
    var className = 'news-item' + (this.state.isCollapsed ? ' collapsed' : '')

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

    if (this.state.isCollapsed && title.length > 50) {
      title = title.substr(0, 50) + '…'
    }

    return React.createElement('div', {className: 'news-title', onClick: this.toggleShow}, title)
  },

  renderContent: function() {
    return React.createElement('div', {className: 'news-content'}, this.props.content)
  }
})
