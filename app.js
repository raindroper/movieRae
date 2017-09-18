(function (angular) {
  // "use strict";

  // start your ride
  var app = angular.module("main", [
    "homeMod",
    "detailsMod",
    "intheatersMod",
    "auto-active"
    // "comingMod",
    // "topMod",
  ])
  app.controller('mainController', ['$scope', '$location'
    , function ($scope, $location) {
      $scope.query = '';
      $scope.search = function () {
        // 改变的url中的锚点，不用再去发请求.
        $location.url('/search/?q=' + $scope.query);
      }
    }]);
})(angular);