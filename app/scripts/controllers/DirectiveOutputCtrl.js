app.controller('DirectiveOutputCtrl', function($scope) {
    $scope.colors = [];
    
    $scope.currentColor = "any";

    $scope.random255 = function() {
        return Math.floor((Math.random()*255));
    }
    for (var i=0; i<1000; i++) {

        var color = {   r: $scope.random255(),
                        g: $scope.random255(),
                        b: $scope.random255() 
                    };
        // find the dominant color composant in that random color
        if (color.r > color.g && color.r > color.b)
            color.primary = "red";
        else if (color.b > color.g && color.b > color.r)
            color.primary = "blue";
        else
            color.primary = "green";

        $scope.colors.push(color);
    }
});

app.directive('colorFilterBar', function() {
    return {
        restrict: 'E',
        scope: {
            primaryColor: '='
        },
        template: '<dl class="sub-nav">' +
                    '<dd ng-class="{true:\'active\'}[c.selected]" ng-repeat="c in primaryColors">' +
                        '<a ng-click="selectColor(c)">{{c.color}}</a>' + 
                    '</dd>' +
                  '</dl>',
        link: function(scope, element, attrs) {
            scope.primaryColors = [ 
                                    { color: "any",     selected: true  },
                                    { color: "red",     selected: false },
                                    { color: "green",   selected: false },
                                    { color: "blue",    selected: false }
                                ];

            scope.selectColor = function(c) {
                scope.primaryColor = c.color;
                _.each(scope.primaryColors, function(color) {
                    color.selected = color.color === c.color;
                });
            };
        }
    };
});