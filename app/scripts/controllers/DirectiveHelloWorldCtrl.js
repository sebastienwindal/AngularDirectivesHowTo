app.controller('DirectiveHelloWorldCtrl', function($scope) {
    
});


app.directive('helloWorld1', function(){
    return {
        name: 'helloWorld1',
        restrict: 'E',
        template: '<div>HELLO WORLD</div>',
        link: function(scope, element, attrs) {
            // nothing.            
        }
    };
});

app.directive('helloWorld2', function(){
    return {
        name: 'helloWorld2',
        restrict: 'A',        
        link: function(scope, element, attrs) {
            // alert on click...
            element.bind("click", function() {
                alert("HELLO WORLD!!!!");
            });
        }
    };
});