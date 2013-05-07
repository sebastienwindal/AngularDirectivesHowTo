'use strict';

app.controller('MainCtrl', function ($scope, $location) {
    
    $scope.location = $location;

    $scope.loadDirective = function(dir) {
        $location.path(dir.url);
    };

    $scope.directives = [ 
        {
            url: '/',
            name: "TOC",
            description: "table of content"
        },
        {
            url: '/intro-1',
            name: "introduction",
            description: "start here"
        },
        {   
            url: '/helloworld',
            name: "Hello world",
            description: 'hello world directive' 
        },
        {   
            url: '/directiveredify',
            name: "Redify directive",
            description: 'change text to red' 
        },
        {   
            url: '/directivecloneit',
            name: "Clone element",
            description: 'clone a dom element' 
        },
        {   
            url: '/directivecolorify',
            name: "Colorify directive",
            description: 'change text to a custom color' 
        },
        {   
            url: '/directivepartialcolorify',
            name: "Partial colorify directive",
            description: 'partially change text to a custom color' 
        },
        {   
            url: '/directivepartialcolorify2',
            name: "Partial colorify directive (2)",
            description: 'partially change text to a custom color' 
        },
        {
            url: '/directivecallback',
            name: "Directive with callbacks",
            description: 'registering callback to a directive'
        },
        {
            url: '/directiveoutput',
            name: "output",
            description: 'Directive with output attributes'
        },
        {
            url: '/isolatescopegotcha',
            name: "isolate scope gotcha",
            description: 'Isolate scope is isolated'
        },
        {
            url: '/navdirective',
            name: 'navigation button',
            description: 'Using a service inside a directive'
        },
        {   
            url: '/adipoli',
            name: "Adipoli jquery wrapper",
            description: 'Wrapping a jquery control in a directive' 
        },
        {
            url: '/ae',
            name: "'AE' directive",
            description: "can be both an element or an attr"
        },
        {
            url: '/transclude',
            name: "Transclude",
            description: "using transclude in a directive"
        },
        {
            url: '/regexswitch',
            name: 'sw-switch/sw-match',
            description: "inter-directive communication"
        },
        {
            url: '/theend',
            name: "THE END",
            description: 'This is the end'
        }
    ];

    $scope.$watch('location.path()', function(newPath) {

        _.each($scope.directives, function(directive) {
            directive.isCurrent = directive.url === newPath;
        });
    });

});


app.directive("rainbow", function() {
    return {
        restrict: 'A',
        priority: 500,
        link: function(scope, element, attrs) {
            setTimeout(function() {
                            Rainbow.color();    
                        }, 50);
        }
    };
});
