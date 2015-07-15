var TweetCounter = React.createClass({
  render: function () {
    var remainingCharacters = this.props.maxLength - this.props.tweetContent.length;
    var cx = React.addons.classSet;
    var classes = cx({
      'tweet-counter': true,
      warning: remainingCharacters < 15,
      error: remainingCharacters < 0
    });
    return (
      <div className={classes}>{remainingCharacters}</div>
    );
  }
});