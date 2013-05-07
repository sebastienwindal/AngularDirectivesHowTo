app.directive('swSwitch', function() {
  
  var myDirective = {
    restrict: 'A',
    scope: false,
    // define a controller, this allows us to share data
    // with this directive and the swMatch child directive.
    controller: ['$scope', function swSwitchController() {
     this.cases = []; // each child directive is adding information to this array
    }],
    link: function(scope, element, attr, controller) {
      // the expression we want to match against, 
      // we pass it as an argument in ng-switch="expression"
      var watchExpr = attr.swSwitch;
      var matchingElements = [];
      
      // we want to recompute the DOM tree inside the
      // swSwitch directive if the text to match against changes.
      scope.$watch(watchExpr, function ngSwitchWatchAction(newValue) {        
        if (matchingElements.length > 0) {
          for (var i in matchingElements) {
            matchingElements[i].remove()
          };
          matchingElements = [];
        }
        if (!newValue)
          return; // nothing to match against.
        
        selectedScope = scope.$new();
      
        // Each sw-match directive added some data to controller.cases,
        // decide to disply the associated elements or not
        for (i in controller.cases) {
          // the content of the element 
          var selectedTransclude = controller.cases[i].transclude;

          // the regular expression to match against.
          var caseRegexStr =  controller.cases[i].regex;
        
          var regex = new RegExp(caseRegexStr);
        
          if (newValue.search(regex) != -1) {
            selectedTransclude(selectedScope, function(caseElement) {
              matchingElements.push(caseElement);
              element.append(caseElement); 
            });

          }
        }
      });
    }
  };
  return myDirective;
});


app.directive('swMatch', function() {

  var myDirective = {
    transclude: 'element', // compile the whole content of the associated element and make it available to the directive
    restrict: 'A', // attribute
    require: '^swSwitch', // Thanks to this, we are now access the sw-switch directive controller
    compile: function compile(tElement, tAttrs, tTransclude) {
      return function postLink(scope, element, attrs, controller) {
        // controller is a reference to the swSwitch directive.
        // Add enough information so the swSwitch directive
        // can decide whether the element associated with this directive
        // (element and its content transclude) should be displayed or not...
        controller.cases.push({ transclude: tTransclude, element: element, regex: attrs.swMatch });
      }
    }
  };
  return myDirective; 
});