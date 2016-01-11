'use strict';

/* Controllers */
var myApp = angular.module('myApp', []);

myApp.controller('allCacegory',['$scope','$http', function($scope, $http) {
  $http.get('http://dev.viewily.com:8080/core-server-0.0.1-SNAPSHOT/category/all').success(function(data, status, headers, config) {
      $scope.phones = angular.toJson(data);
      return data;
  });
}]);



function test () {
  alert('asdad');
}

test();
