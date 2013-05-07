
app.controller('DirectiveCloneItCtrl', function($scope) {
    
});

app.directive('cloneIt', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
        // do a setTimeout 0 to push the actual DOM cloning at the end of the queue
        // so we are cloning elements AFTER angular has made the databinding happen.
        setTimeout(function() {
            var num = attrs.cloneIt;
            if (!num) num = 1;
 
            for (var i=0; i<num; i++) {
                var clone = element.clone();
                element.after(clone);        
            }
        }, 0);
    }
  };
});