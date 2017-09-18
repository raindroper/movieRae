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
  app.controller('PostListController',
      function ($scope) {
        // 设置轮播图图片间隔
        $scope.myInterval = 5000;
        // 轮播图数据初始化
        var slides = $scope.slides = [];
        // 添加轮播图源
        slides.push({ image: './assets/img/aizaishenqiu.jpg', text: '亲爱的你，情人节快乐' });
        slides.push({ image: './assets/img/aizaishenqiu.jpg', text: '亲爱的你，情人节快乐' });
      });
})(angular)