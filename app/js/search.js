function TwitterSearchCtrl($scope, $http, $log) {
  $scope.doSearch = function() {
    var uri ='http://search.twitter.com/search.json?q='
      + encodeURIComponent($scope.query)
      + '&callback=JSON_CALLBACK';
    $http.jsonp(uri).success(function(data) {
      $scope.results = data.results;
    });
  };
}
