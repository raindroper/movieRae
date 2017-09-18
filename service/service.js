(function (angular) {
  var app = angular.module("serMod", []);
  app.service("ser", ["$window", function ($window) {
    this.jsonp = function (url, arg, fn) {
      var scr = document.createElement("script");
      var str = "";
      for (var k in arg) {
        str = str + k + "=" + arg[k] + "&";
      }

      var funcName = 'myJsonp' + $window.Math.random().toString().substr(2);

      url = url + "?" + str + "callback=" + funcName;

      scr.src = url;

      $window[funcName] = function (data) {
        fn(data);
      }

      document.body.appendChild(scr);
    }
  }])
})(angular)