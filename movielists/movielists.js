(function (angular) {
  var app = angular.module("intheatersMod", ["ngRoute", "serMod"]);

  app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/:movieType/:page?", {
      templateUrl: "./movielists/movielists.html",
      controller: "intheatersCon"
    })
  }])
  app.controller("intheatersCon",
      ["$scope",
        "$http",
        "$routeParams",
        "$route",
        "ser",
        function ($scope, $http, $routeParams, $route, ser) {
          $scope.loading = true;
          $scope.page = ($routeParams.page || "1") - 0;
          ser.jsonp("http://api.douban.com/v2/movie/" + $routeParams.movieType, {
            start: ($scope.page - 1) * 10,
            count: 10,
            q: $routeParams.q
          }, function (data) {
            $scope.data = data;
            $scope.totalPage = Math.ceil($scope.data.total / 10);
            $scope.loading = false;
            $scope.$apply();
          })

          $scope.getPage = function (newPage) {
            if (newPage <= 0 || newPage > $scope.totalPage) {
              return
            }
            $route.updateParams({page: newPage})
          }
          // $scope.getPage(1);
        }])
})(angular)