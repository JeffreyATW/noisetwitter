angular.module('NoiseTwitter', ['ngRoute']);

angular.module('NoiseTwitter').config(function ($routeProvider) {
  $routeProvider.when('/tweets/:id', {
    controller: 'TweetController',
    templateUrl: 'tweet',
    resolve: {
      tweet: function ($http, $route) {
        return $http.get('/tweets/' + $route.current.params.id + '.json');
      }
    }
  }).otherwise({
    controller: 'MainController',
    templateUrl: 'main',
    resolve: {
      tweets: function ($http) {
        return $http.get('/tweets.json');
      }
    }
  });
}).controller('MainController', function ($scope, $http, tweets) {
  $scope.tweets = tweets.data;

  $scope.addTweet = function () {
    $http.post('/tweets.json', {content: $scope.tweetContent})
      .success(function (data) {
        $scope.tweets.unshift(data);
        $scope.tweetContent = '';
      });
  };

  $scope.favorite = function (tweet) {
    $http.put('/tweets/' + tweet.id + '.json', {favorited: !tweet.favorited})
      .success(function (data) {
        tweet.favorited = data.favorited;
      });
  }

  $scope.retweet = function (tweet) {
    $http.put('/tweets/' + tweet.id + '.json', {retweeted: !tweet.retweeted})
      .success(function (data) {
        tweet.retweeted = data.retweeted;
      });
  }

  $scope.tweetContent = "";
  $scope.remainingCharacters = function () {
    return 140 - $scope.tweetContent.length;
  }

  $scope.tweetContentInvalid = function () {
    return $scope.tweetContent.length === 0 || $scope.remainingCharacters() < 0;
  }
}).controller('TweetController', function ($scope, tweet) {
  $scope.tweet = tweet.data;
});