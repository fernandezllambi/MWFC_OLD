/**
 * Created by Rod on 8/18/15.
 */
angular.module('starter.controllers')
    .controller('TableCtrl', function($scope) {
        var teams = [
            { title: 'Nacional', id: 1, pts: 3, pj:1, gf:4, gc: 1 },
            { title: 'Peñarol', id: 2, pts: 3, pj:1, gf:4, gc: 1 },
            { title: 'Danubio', id: 3, pts: 3, pj:1, gf:4, gc: 1 },
            { title: 'Racing', id: 4, pts: 3, pj:1, gf:4, gc: 1 },
            { title: 'Fénix', id: 5, pts: 3, pj:1, gf:4, gc: 1 },
            { title: 'Rentistas', id: 6, pts: 3, pj:1, gf:4, gc: 1 },
            { title: 'Liverpool', id: 7, pts: 3, pj:1, gf:4, gc: 1 },
            { title: 'Wanderers', id: 8, pts: 3, pj:1, gf:4, gc: 1 },
            { title: 'Defensor', id: 9, pts: 3, pj:1, gf:4, gc: 1 },
            { title: 'Sudamérica', id: 10, pts: 3, pj:1, gf:4, gc: 1 },
            { title: 'Tanque Sisley', id: 11, pts: 3, pj:1, gf:4, gc: 1 },
            { title: 'Plaza Colonia', id: 12, pts: 3, pj:1, gf:4, gc: 1 },
            { title: 'River Plate', id: 13, pts: 3, pj:1, gf:4, gc: 1 },
            { title: 'Juventud', id: 14, pts: 3, pj:1, gf:4, gc: 1 },
            { title: 'Villa Teresa', id: 15, pts: 3, pj:1, gf:4, gc: 1 },
            { title: 'Cerro', id: 16, pts: 3, pj:1, gf:4, gc: 1 }

        ];

        $scope.teams = teams;

    });