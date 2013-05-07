app.controller('WordCountCtrl', function($scope) {
   
   $scope.wordCount = 0;

   $scope.myText = "";

   $scope.$watch("myText", function(newText) {
        var wordArray = $scope.myText.split(/[^a-zA-Z0-9-]/g);
        var cleanedUpArray = _.filter(wordArray, function(w) { return w.length > 0;});
        $scope.wordCount = cleanedUpArray.length;
   });
});


app.directive('highlightedP', function() {
    return {
        scope: {
            text:'@'
        },
        template: '<div ng-bind-html-unsafe="highlightedHTML"></div>',
        restrict: 'E',
        link: function(scope, element, attrs, ctrl) {

            scope.colorLengthArray = [  "red", 
                                        "green", 
                                        "blue", 
                                        "cyan", 
                                        "lime", 
                                        "pink",
                                        "Maroon",
                                        "MediumAquaMarine",
                                        "MediumBlue",
                                        "MediumOrchid",                                        
                                        ];             

            scope.HTMLifyText = function(t) {
                
                scope.highlightedHTML = t.replace(/([A-Za-z0-9-]+)/g, function(s, group) {
                    var index = (group.length >= scope.colorLengthArray.length) ? scope.colorLengthArray.length : group.length;
                    var color = scope.colorLengthArray[index-1];
                    return "<span style='color:" + color + "'>" + group + "</span>";
                });
            };
            
            scope.$watch('text', function(t) {
                scope.HTMLifyText(t);
            });
        }
    };
});

