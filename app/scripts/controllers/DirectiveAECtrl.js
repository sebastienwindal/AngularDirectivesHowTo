app.controller('DirectiveAECtrl', function($scope) {
    
});


app.directive('smallRedSquare', function() {
  return {
    restrict: 'AE',
    template: "<div style='width:70px;height:70px;background-color:red;'></div>",
    link: function(scope, element, attrs) {
            
    }
  };
});

app.directive('bigGreenCircle', function() {
  return {
    restrict: 'AE',    
    link: function(scope, element, attrs) {
        
        element.width(200);
        element.height(200);
        element.css('background-color', 'lime');
        element.css('border-radius', 125);
        element.css('display', 'block');
    }
  };
});

app.directive('mediumYellowRectangle', function() {
  return {
    restrict: 'AE',
    transclude: true,
    template: "<div style='width:120px;margin:10px;height:80px;background-color:yellow;'><div ng-transclude></div></div>",
    link: function(scope, element, attrs) {
            
    }
  };
});