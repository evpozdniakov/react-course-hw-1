var NewsList = React.createClass({
  render: function() {
    var items = this.props.newsData.map(function(newsItem) {
      newsItem.key = newsItem.link;

      return React.createElement(NewsItem, newsItem);
    })

    var props = {
      className: 'news-list-ctnr'
    }

    return React.createElement('div', props, items)
  }
})
