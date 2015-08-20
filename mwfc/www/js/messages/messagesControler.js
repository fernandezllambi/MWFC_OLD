/**
 * Created by Rod on 8/18/15.
 */
angular.module('starter.controllers')
    .controller('MessagesCtrl', function($scope, $ionicModal) {
        var messages = [
            { title: 'Cuota paga', message: 'Se debitó la couta correspondiente al mes de agosto', read: false, date: '1/8/2015' },
            { title: 'Cuota paga', message: 'Se debitó la couta correspondiente al mes de julio', read: true, date: '1/7/2015' },
            { title: 'Cuota paga', message: 'Se debitó la couta correspondiente al mes de junio', read: true, date: '1/6/2015' },
            { title: 'Cuota paga', message: 'Se debitó la couta correspondiente al mes de mayo', read: true, date: '1/5/2015' },
            { title: 'Cuota paga', message: 'Se debitó la couta correspondiente al mes de abril', read: true, date: '1/4/2015' },
            { title: 'Cuota paga', message: 'Se debitó la couta correspondiente al mes de marzo', read: true, date: '1/3/2015' },
            { title: 'Cuota paga', message: 'Se debitó la couta correspondiente al mes de febrero', read: true, date: '1/2/2015' },
            { title: 'Cuota paga', message: 'Se debitó la couta correspondiente al mes de enero', read: true, date: '1/1/2015' }
        ];

        $scope.messages = messages;

        // Create the login modal that we will use later
        $ionicModal.fromTemplateUrl('templates/message.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
        });

        // Triggered in the login modal to close it
        $scope.closeLogin = function () {
            $scope.modal.hide();
        };

        $scope.showMessage = function(message){
            $scope.message = message;
            $scope.modal.show();
        }

    });