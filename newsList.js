var NewsList = React.createClass({
  propTypes: {
    newsData: React.PropTypes.arrayOf(React.PropTypes.shape({
      link: React.PropTypes.string.isRequired
    }))
  },

  getInitialState: function() {
    return {
      expandedItemIndex: -1,
    }
  },

  toggleShow: function(ev, data) {
    if (this.state.expandedItemIndex === data.index) {
      this.setState({expandedItemIndex: -1})
    }
    else {
      this.setState({expandedItemIndex: data.index})
    }
  },

  render: function() {
    var items = this.props.newsData.map(function(newsItem, index) {
      newsItem.index = index;
      newsItem.isExpanded = index === this.state.expandedItemIndex;

      return React.createElement(NewsItem, {key: newsItem.link, toggleShow: this.toggleShow, newsItem: newsItem});
    }.bind(this))

    var props = {
      className: 'news-list-ctnr'
    }

    return React.createElement('div', props, items)
  }
})
