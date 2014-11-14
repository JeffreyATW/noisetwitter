angular.module('NoiseTwitter', []);

angular.module('NoiseTwitter').controller('MainController', function ($scope) {
  $scope.tweets = [
    {
      content: 'You give love a bad name.'
    },
    {
      content: 'Old McDonald had a farm.'
    },
    {
      content: "I'm a little teapot, short and stout."
    }
  ];

  $scope.addTweet = function () {
    $scope.tweets.unshift({content: $scope.tweetContent});
  };

  $scope.favorite = function (tweet) {
    tweet.favorited = !tweet.favorited;
  }

  $scope.retweet = function (tweet) {
    tweet.retweeted = !tweet.retweeted;
  }

  $scope.tweetContent = "";
  $scope.remainingCharacters = function () {
    return 140 - $scope.tweetContent.length;
  }

  $scope.tweetContentInvalid = function () {
    return $scope.tweetContent.length === 0 || $scope.remainingCharacters() < 0;
  }
});