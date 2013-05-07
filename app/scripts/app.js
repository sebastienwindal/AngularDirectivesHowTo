'use strict';

var app = angular.module('directives101App', []);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/intro-1', {
        templateUrl: 'views/intro-1.html'
      })
      .when('/intro-2', {
        templateUrl: 'views/intro-2.html'
      })
      .when('/intro-3', {
        templateUrl: 'views/intro-3.html'
      })
      .when('/intro-4', {
        templateUrl: 'views/intro-4.html'
      })
      .when('/intro-5', {
        templateUrl: 'views/intro-5.html'
      })
      .when('/helloworld', {
        templateUrl: 'views/helloworld.html',
        controller: 'DirectiveHelloWorldCtrl'
      })
      .when('/directiveredify', {
        templateUrl: 'views/directiveredify.html',
        controller: 'DirectiveRedifyCtrl'
      })
      .when('/directivecolorify', {
        templateUrl: 'views/directivecolorify.html',
        controller: 'DirectiveColorifyCtrl'
      })
      .when('/directivepartialcolorify', {
        templateUrl: 'views/directivepartialcolorify.html',
        controller: 'DirectivePartialColorifyCtrl'
      })
      .when('/directivepartialcolorify2', {
        templateUrl: 'views/directivepartialcolorify2.html',
        controller: 'DirectivePartialColorifyCtrl'
      })
      .when('/directivecallback', {
        templateUrl: 'views/directivecallback.html',
        controller: 'DirectiveWithCallbackCtrl'
      })
      .when('/directivecloneit', {
        templateUrl: 'views/directivecloneit.html',
        controller: 'DirectiveCloneItCtrl'
      })
      .when('/adipoli', {
        templateUrl: 'views/adipoli.html',
        controller: 'DirectiveAdipoliCtrl'
      })
      .when('/navdirective', {
        templateUrl: 'views/navdirective.html'
      })
      .when('/directiveoutput', {
        templateUrl: 'views/directiveoutput.html',
        controller: 'DirectiveOutputCtrl'
      })
      .when('/ae', {
        templateUrl: 'views/ae.html',
        controller: 'DirectiveAECtrl'
      })
      .when('/transclude', {
        templateUrl: 'views/transclude.html'
      })
      .when('/regexswitch', {
        templateUrl: 'views/regexswitch.html'
      })
      .when('/iospopover', {
        templateUrl: 'views/iospopover.html',
        controller: 'IOSPopoverCtrl'
      })
      .when('/theend', {
        templateUrl: 'views/theend.html'
      })
      .when('/isolatescopegotcha', {
        templateUrl: 'views/isolatescopegotcha.html',
        controller: 'IsolateScopeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
