/**
 * Created by Rod on 8/19/15.
 */
angular.module('starter.controllers')
    .controller('LicenceCtrl', function($scope, $state, $ionicHistory, AccountService) {
        if(!AccountService.isAuthorized()){
            $state.go("app.home");
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
        }
    });