/**
 * Created by Rod on 8/18/15.
 */
angular.module('starter.controllers')
    .controller('NewsListCtrl', function($scope, $stateParams) {
        var news = [
            { title: 'Reggae', id: 1 },
            { title: 'Chill', id: 2 },
            { title: 'Dubstep', id: 3 },
            { title: 'Indie', id: 4 },
            { title: 'Rap', id: 5 },
            { title: 'Cowbell', id: 6 }
        ];

        $scope.newsList = news;

        if($stateParams.newsId){
            for(n in news){
                if(news[n].id == $stateParams.newsId){
                    $scope.news = news[n];
                }
            }
        }
    });