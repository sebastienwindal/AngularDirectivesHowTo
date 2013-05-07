app.controller('DirectiveWithCallbackCtrl', function($scope) {

    $scope.menuItems = [ "Hello", "World", "How", "Are", "You", "Doing?", "Help", "Exit" ];

    $scope.menuClickedCallbackInMyController = function() {
        alert("You clicked on an item!")
    };

    $scope.menuItemClickedCallbackInMyController = function(item) {
        alert("You clicked on " + item);
    };

});


app.directive('toolbar', function() {
  return {
    restrict: 'E',
    scope: {
        items: '=',
        onClick: '&',   
        onClickItem: '&',
        onClickItem2: '='
    },
    template:   '<ul class="breadcrumbs">' + 
                    '<li ng-repeat="item in items" >' + 
                        '<a ng-click="menuItemClicked(item)">{{item}}</a>' + 
                    '</li>' +
                '</ul>',
    link: function(scope, element, attrs) {
        scope.menuItemClicked = function(item) {            
            // no argument: this is easy:
            scope.onClick();
            // It would be nice id this worked but it does not:
            scope.onClickItem(item);
            // this works
            scope.onClickItem({parameterClicked: item});
            // another option is to use a two-way binding attribute/scope var, the function is the scope variable
            scope.onClickItem2(item);
        }
    }
  };
});