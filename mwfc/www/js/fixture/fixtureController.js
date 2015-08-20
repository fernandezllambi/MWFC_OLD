/**
 * Created by Rod on 8/18/15.
 */
angular.module('starter.controllers')
.controller('FixtureCtrl', function($scope, $cordovaCalendar) {
    $scope.addEvent = function(){
        $cordovaCalendar.createEvent({
            title: 'Wanderers',
            location: 'Viera',
            notes: 'Nota',
            startDate: new Date(2016, 8, 29, 15, 120, 0, 0, 0),
            endDate: new Date(2016, 8, 29, 17, 0, 0, 0)
        }).then(function (result) {
            // success
            alert('Se creó el evento')
        }, function (err) {
            // error
            alert('No Se creó el evento')

        });
    }
});