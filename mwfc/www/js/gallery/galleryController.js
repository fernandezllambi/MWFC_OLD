/**
 * Created by Rod on 8/18/15.
 */
angular.module('starter.controllers')
    .controller('GalleryCtrl', function ($scope, $ionicModal) {
        $scope.imageModal = function (img) {
            $scope.img = img;
            $ionicModal.fromTemplateUrl("../templates/galleryModal.html", {
                animation: 'slide-in-up',
                scope: $scope
            }).then(function(modal){
                $scope.modal = modal;
                $scope.modal.show();
            });
        };

        $scope.closeLogin = function () {
            $scope.modal.hide();
        };
    });