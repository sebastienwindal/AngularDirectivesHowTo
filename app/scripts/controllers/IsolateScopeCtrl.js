app.controller('IsolateScopeCtrl', function($scope) {
    
    $scope.customers = [    {
                                firstName: "John",
                                lastName: "Doe"
                            },
                            {
                                firstName: "Jane",
                                lastName: "Roe"
                            }
                        ];
});



app.directive('unfortunateDirective', function() {
    return {
        restrict: 'A',
        scope: {
        },
        link: function(scope, element, attrs) {
        }
    }
});
