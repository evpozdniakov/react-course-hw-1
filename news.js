var newsData = JSON.parse(newsJSON); 

var newsList = React.createElement(NewsList, {newsData: newsData});

ReactDOM.render(newsList, document.querySelector('#news-ctnr'));
