app.controller('DirectiveRedifyCtrl', function($scope) {
    
});


app.directive('redify', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      // change the color to red
      element.css('color', 'red');
    }
  };
});