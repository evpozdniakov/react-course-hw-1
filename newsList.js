var NewsList = React.createClass({
  propTypes: {
    newsData: React.PropTypes.arrayOf(React.PropTypes.shape({
      link: React.PropTypes.string.isRequired
    }))
  },

  getInitialState: function() {
    return {
      expandedItemIndex: -1,
      commentsShown: false,
    }
  },

  toggleNewsContent: function(ev, data) {
    if (this.state.expandedItemIndex === data.index) {
      this.setState({expandedItemIndex: -1})
    }
    else {
      this.setState({expandedItemIndex: data.index})
    }

    this.setState({commentsShown: false})
  },

  toggleNewsComments: function() {
    this.setState({commentsShown: !this.state.commentsShown})
  },

  render: function() {
    var items = this.props.newsData.map(function(newsItem, index) {
      newsItem.index = index;
      newsItem.isExpanded = index === this.state.expandedItemIndex;
      newsItem.commentsShown = newsItem.isExpanded && this.state.commentsShown; 

      var props = {
        key: newsItem.link,
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
