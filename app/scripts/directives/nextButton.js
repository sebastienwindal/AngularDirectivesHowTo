

app.directive('nextButton', ['$location', function($location) {
    var myDir = {
        restrict: 'E',
        template: '<a class="next-button button">Next <i class="icon-large icon-circle-arrow-right"></i></a>',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                $location.path(attrs.href);
                scope.$apply() 
            });
        }
    };
    return myDir;
}]);