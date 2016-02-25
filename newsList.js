var NewsList = React.createClass({
  propTypes: {
    newsData: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired
    }))
  },

  getInitialState: function() {
    return {
      expandedItemId: -1,
      commentsShown: false,
    }
  },

  toggleNewsContent: function(ev, data) {
    if (this.state.expandedItemId === data.id) {
      this.setState({expandedItemId: -1})
    }
    else {
      this.setState({expandedItemId: data.id})
    }

    this.setState({commentsShown: false})
  },

  toggleNewsComments: function() {
    this.setState({commentsShown: !this.state.commentsShown})
  },

  render: function() {
    var items = this.props.newsData.map(function(newsItem) {
      newsItem.isExpanded = newsItem.id === this.state.expandedItemId;
      newsItem.commentsShown = newsItem.isExpanded && this.state.commentsShown; 

      var props = {
        key: newsItem.id,
        toggleNewsContent: this.toggleNewsContent,
        toggleNewsComments: this.toggleNewsComments,
        newsItem: newsItem,
      }

      return React.createElement(NewsItem, props);
    }.bind(this))

    var props = {
      className: 'news-list-ctnr'
    }

    return React.createElement('div', props, items)
  }
})
