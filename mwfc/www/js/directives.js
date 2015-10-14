/**
 * Created by Rod on 10/13/15.
 */
angular.module('starter.directives', [])
    .directive('imageRotate', function(){
    return {
        restrict: 'A',
        link: function(scope, elem, attr) {
            console.log(1);
            debugger;
            elem.on('load', function() {
                var w = $(this).width(),
                    h = $(this).height();

                var div = elem.parent();

                //check width and height and apply styling to parent here.
            });
        }
    };
});