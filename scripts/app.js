'use strict';

var app = angular.module('app', ['ngRoute','ui.select', 'ngSanitize']);

app.config(function($routeProvider) {
  $routeProvider
  .otherwise({
    templateUrl: 'view.html',
    controller: 'DemoCtrl'
  });
});