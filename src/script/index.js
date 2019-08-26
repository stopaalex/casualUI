"use strict";

var myApp = angular.module('myApp', [
    'ngRoute',
    'cuiButton',
    'cuiContainer'
]);

myApp.controller('myAppCtrl', function($scope, $rootScope) {
   
    $scope.helloWorld = 'Hello, World!';

});

var cuiButton = angular.module('cuiButton', [])
.directive('cuiButton', function() {
    return {
        link: function(scope, element, attrs) {
            scope.buttonHTML = function() {
                return 'templates/button.template.html';
            }
        },
        restrict: 'A',
        template: '<div ng-include="buttonHTML()"></div>'
    }
})
.controller('cuiButtonCtrl', function($scope, $rootScope) {});

var cuiContainer = angular.module('cuiContainer', [])
.directive('cuiContainer', function() {
    return {
        link: function(scope, element, attrs) {
            scope.containerHTML = function() {
                return 'templates/container.template.html';
            }
        },
        restrict: 'A',
        template: '<div ng-include="containerHTML()"></div>'
    }
})
.controller('cuiContainerCtrl', function($scope, $rootScope) {});