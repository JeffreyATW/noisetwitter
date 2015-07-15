var Tweet = React.createClass({
  render: function () {
    return (
      <article className="tweet clearfix" ng-repeat="tweet in tweets" ng-className="{favorited: tweet.favorited, retweeted: tweet.retweeted}">
        <a href="http://twitter.com/JeffreyATW" className="avatar">
          <img src="assets/avatar.jpg" alt={ this.props.author } />
        </a>
        <div className="tweet-details">
          <small className="time">3h</small>
          <a href="http://twitter.com/JeffreyATW" className="author">{ this.props.author }</a>
          <p className="tweet-content">{ this.props.children.toString() }</p>
        </div>
        <button className="favorite" ng-click="favorite(tweet)">Favorite</button>
        <button className="retweet" ng-click="retweet(tweet)">Retweet</button>
      </article>
    );
  }
});