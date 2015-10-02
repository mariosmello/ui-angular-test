'use strict';

var module = angular.module('app');

module.controller('DemoCtrl',DemoCtrl);

function DemoCtrl ( $scope ) {

  $scope.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];
  $scope.singleDemo = {};
  $scope.singleDemo.color = '';
  $scope.multipleDemo = {};
  $scope.multipleDemo.colors = ['Blue','Red'];

}

DemoCtrl['$inject'] = ['$scope'];