app.controller('DirectiveColorifyCtrl', function($scope) {
    
});


app.directive('colorify', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      // change the color to what was specified in attribtues
      element.css('color', attrs.colorify);
    }
  };
});