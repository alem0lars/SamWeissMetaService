'use strict';

angular.module('samWeissMetaServiceApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/availableServices').success(function(availableServices) {
      $scope.availableServices = availableServices;
    });
  });
