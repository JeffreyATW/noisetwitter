var TweetList = React.createClass({
  render: function () {
    var tweets = this.props.data.map(function (tweet) {
      return (
        <Tweet author={tweet.author}>
          {tweet.content}
        </Tweet>
      )
    });
    return (
      <section className="tweets">
        {tweets}
      </section>
    );
  }
});