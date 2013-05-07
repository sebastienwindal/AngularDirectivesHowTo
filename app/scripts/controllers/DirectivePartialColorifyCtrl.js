app.controller('DirectivePartialColorifyCtrl', function($scope) {
    
});


app.directive('partialColorify', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
        if (!attrs.colorifyRegex)
            attrs.colorifyRegex = ".*";

        var regex = new RegExp(attrs.colorifyRegex, "g");
        if (!regex) return;
        
        var text = element.text();        
        var html = text.replace(regex, function(match) {
            return '<span style="color:' + attrs.partialColorify + '">' + match + '</span>';
        });      
        element.html(html);
    }
  };
});


app.directive('partialColorify2', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
        if (!attrs.colorifyRegex)
            attrs.colorifyRegex = ".*";

        var regex = new RegExp(attrs.colorifyRegex, "g");
        if (!regex) return;
        
        scope.$watch(attrs.partialColorify2, function(newValue) {
            var text = element.text();        
            var html = text.replace(regex, function(match) {
                return '<span style="color:' + newValue + '">' + match + '</span>';
            });      
            element.html(html);
        });
    }
  };
});


app.directive('partialColorify3', function() {
  return {
    restrict: 'A',
    scope: {
        color: '@'
    },
    link: function(scope, element, attrs) {
        if (!attrs.colorifyRegex)
            attrs.colorifyRegex = ".*";

        var regex = new RegExp(attrs.colorifyRegex, "g");
        if (!regex) return;
        
        scope.$watch('color', function(newValue) {
            var text = element.text();        
            var html = text.replace(regex, function(match) {
                return '<span style="color:' + newValue + '">' + match + '</span>';
            });      
            element.html(html);
        });
    }
  };
});



app.directive('partialColorify4', function() {
  return {
    link: function(scope, element, attrs) {
        if (!attrs.colorifyRegex)
            attrs.colorifyRegex = ".*";

        var regex = new RegExp(attrs.colorifyRegex, "g");
        if (!regex) return;
        
        attrs.$observe('color', function(newValue) {
            var text = element.text();        
            var html = text.replace(regex, function(match) {
                return '<span style="color:' + newValue + '">' + match + '</span>';
            });      
            element.html(html);
        });
    }
  };
});
