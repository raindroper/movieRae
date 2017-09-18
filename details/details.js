(function (angular) {
  var app = angular.module("detailsMod", ["ngRoute","serMod"]);

  app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/details/:id?", {
      templateUrl: "./details/details.html",
      controller: "detailsCon"
    })
  }])
  app.controller("detailsCon", ["$scope","$routeParams","ser", function ($scope,$routeParams,ser) {
    //
    ser.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id,{},function(data){
      $scope.data = data
      $scope.$apply()
    })
  }])
})(angular)