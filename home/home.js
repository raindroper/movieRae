(function (angular) {
  var app = angular.module("homeMod", ["ngRoute", "serMod"]);

  app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/home_page", {
      templateUrl: "./home/home.html",
      controller: "homeCon"
    }).when("/", {
      templateUrl: "../home/home.html",
      controller: "homeCon"
    });
  }])
  app.controller("homeCon", ["$scope", "ser", function ($scope, ser) {
    //
    ser.jsonp("http://api.douban.com/v2/movie/in_theaters", {
      start: 0,
      count: 6,
    }, function (data) {
      $scope.data_hot = data;
      $scope.loading = false;
      $scope.$apply();
    });
    ser.jsonp("http://api.douban.com/v2/movie/coming_soon", {
      start: 0,
      count: 10,
    },function (data) {
      $scope.data_new = data;
      $scope.loading = false;
      $scope.$apply();
    })
  }])
})(angular)