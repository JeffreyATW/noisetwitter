var NoiseTwitter = React.createClass({
  render: function () {
    var data = [
      {
        author: 'JeffreyATW',
        content: 'You give love a bad name.'
      },
      {
        author: 'JeffreyATW',
        content: 'Old McDonald had a farm.'
      },
      {
        author: 'JeffreyATW',
        content: "I'm a little teapot, short and stout."
      }
    ];
    return (
      <div>
        <TweetBox maxLength={140} />
        <TweetList data={data} />
      </div>
    );
  }
});