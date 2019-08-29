"use strict";

var myApp = angular.module('myApp', [
    'ngRoute',
    'cuiWrapper',
    'cuiContainer',
    'cuiButton'
]);

myApp.controller('myAppCtrl', function($scope, $rootScope) {
   
    $scope.helloWorld = 'Hello, World!';

});

var cuiWrapper = angular.module('cuiWrapper', [])
.directive('cuiWrapper', function() {
    return {
        link: function(scope, element, attrs) {
            scope.wrapperHTML = function() {
                return 'templates/wrapper.template.html';
            }
        },
        restrict: 'A',
        template: '<div ng-include="wrapperHTML()"></div>'
    }
})
.controller('cuiWrapperCtrl', function($scope, $rootScope) {});

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
