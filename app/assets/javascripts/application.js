angular.module('NoiseTwitter', ['ngRoute']);

angular.module('NoiseTwitter').config(function ($routeProvider) {
  $routeProvider.when('/tweets/:tweet_id', {
    controller: 'TweetController',
    templateUrl: 'tweet.html',
    resolve: {
      tweet: function ($http, $route) {
        return $http.get('/tweets/' + $route.current.params.tweet_id + '.json');
      }
    }
  }).otherwise({
    controller: 'MainController',
    templateUrl: 'main.html',
    resolve: {
      tweets: function ($http) {
        return $http.get('/tweets.json')
      }
    }
  })
}).controller('MainController', function ($scope, $http, tweets) {
  $scope.tweets = tweets.data;

  $scope.addTweet = function () {
    $http.post('/tweets', {content: $scope.tweetContent}).success(function (data) {
      $scope.tweets.unshift(data);
    })
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
}).controller('TweetController', function ($scope, tweet) {
  $scope.tweet = tweet.data;
})