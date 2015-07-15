var TweetBox = React.createClass({
  getInitialState: function () {
    return {tweetContent: ''};
  },
  handleChange: function (event) {
    this.setState({tweetContent: event.target.value});
  },
  handleSubmit: function () {
    // TODO
  },
  render: function () {
    var disabled = this.state.tweetContent.length > this.props.maxLength;
    return (
      <form className="tweetbox clearfix" onSubmit={this.handleSubmit}>
        <textarea placeholder="Compose new Tweet..." value={this.state.tweetContent} onChange={this.handleChange}></textarea>
        <input type="submit" value="Tweet" disabled={disabled} />
        <TweetCounter tweetContent={this.state.tweetContent} maxLength={this.props.maxLength} />
      </form>
    );
  }
});