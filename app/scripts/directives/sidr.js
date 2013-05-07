
// very simple diretive that register the associated element as 
// a sidr toggle button.
// the element with a sidrMenu directive will be slided.
app.directive('toggleSidrMenu', function() {
    var myDirective = {
        restrict: 'A',
        link: function($scope, iElm, iAttrs, controller) {
            iElm.sidr();
        }
    };
    return myDirective;
});

// make a element a sliding list.
app.directive('sidrMenu', function() {
    var myDir = {
        restrict: 'A',
        compile: function(element) {
            element.attr('id', 'sidr');
        }
    };
    return myDir;
});