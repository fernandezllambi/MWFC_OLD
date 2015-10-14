// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova','ionic.service.core', 'starter.controllers', 'starter.services', 'starter.directives', 'monospaced.qrcode'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })

            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            })

            .state('app.fixture', {
                url: '/fixture',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/fixture.html',
                        controller: 'FixtureCtrl'
                    }
                }
            })
            .state('app.newsList', {
                url: '/newsList',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/newsList.html',
                        controller: 'NewsListCtrl'
                    }
                }
            })

            .state('app.newsDetails', {
                url: '/newsList/:newsId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/news.html',
                        controller: 'NewsListCtrl'
                    }
                }
            })

            .state('app.squad', {
                url: '/squad',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/squad.html'//,
                        //controller: 'NewsListCtrl'
                    }
                }
            })

            .state('app.lineup', {
                url: '/lineup',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/lineup.html'//,
                        //controller: 'NewsListCtrl'
                    }
                }
            })

            .state('app.licence', {
                url: '/licence',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/licence.html',
                        controller: 'LicenceCtrl'
                    }
                }
            })

            .state('app.table', {
                url: '/table',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/table.html',
                        controller: 'TableCtrl'
                    }
                }
            })

            .state('app.messages', {
                url: '/messages',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/messages.html',
                        controller: 'MessagesCtrl'
                    }
                }
            })

            .state('app.gallery', {
                url: '/gallery',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/gallery.html',
                        controller: 'GalleryCtrl'
                    }
                }
            });


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });
