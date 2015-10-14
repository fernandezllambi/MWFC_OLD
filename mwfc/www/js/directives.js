/**
 * Created by Rod on 10/13/15.
 */
angular.module('starter.directives', [])
    .directive('imageRotate', function(){
    return {
        restrict: 'A',
        link: function(scope, elem, attr) {
            elem.on('load', function() {
                var w = this.width,
                    h = this.height;

                if(w > h){
                    elem.addClass('rotate');
                    var parent = elem.parent();
                    var parentW = parent[0].clientWidth;
                    elem[0].style.height = parentW+"px";
                    elem[0].style.position = "absolute";
                    elem[0].style.top = "-42px";
                }else{
                    elem.addClass('width100');
                }




                //check width and height and apply styling to parent here.
            });
        }
    };
});