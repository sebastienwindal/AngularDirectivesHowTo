app.controller('IOSPopoverCtrl', function($scope) {
    
});



app.directive('popoverButton', function() {
    return {
        restrict: 'A',
        scope: false,
        controller: ['$scope', function popoverButtonController() {            
            this.cases = []; // each popover content directive is adding information to this array
        }],
        priority: 1000,
        link: function(scope, element, attrs, controller) {
            console.log(controller);
            scope.myPopoverButton = element;
        }
    }
});


app.directive('popover', function() {
  return {
    restrict: 'E',
    transclude: 'element',
    replace: true,
    template: '<div ng-transclude></div>',
    require: '^popoverButton',
    compile: function compile(tElement, tAttrs, tTransclude) {
      return function postLink(scope, element, attrs, controller) {
        controller.cases.push({ transclude: tTransclude, element: element });
      }
    }
    //link: function(scope, element, attrs, controller) {
    //    console.log(controller);
    //    var contentOfPopover = element.children()[0];

        //scope.myPopoverButton.popover({ content: contentOfPopover });
    //}
  };
});