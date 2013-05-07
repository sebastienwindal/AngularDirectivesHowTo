app.controller('DirectiveAdipoliCtrl', function($scope) {
    
});

app.directive('adipoli', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var options = {};
            if (attrs.hoverEffect) options['hoverEffect'] = attrs.hoverEffect;
            if (attrs.boxCols) options['boxCols'] = attrs.boxCols;
            if (attrs.boxRows) options['boxRows'] = attrs.boxRows;
            if (attrs.slices) options['slices'] = attrs.slices;
            if (attrs.slices) options['imageOpacity'] = attrs.imageOpacity;

            element.adipoli(options);
        }
    };
});