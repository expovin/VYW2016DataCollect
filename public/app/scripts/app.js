'use strict';
angular.module('VYW2016Survey', ['ngResource','ui.router','ui.bootstrap'])

.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller  : 'HeaderController'
                    },
                    'content@': {
                        templateUrl : 'views/Home.html',
                        controller  : 'HomeController'
                    }
                    /*
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                    */
                }                
            })

            // route for the menu page
            .state('app.Survey', {
                url: 'Survey',
                views: {
                    'content@': {
                        templateUrl : 'views/Survey.html',
                        controller  : 'SurveyController'
                    }
                }
            })

            .state('app.Thanks', {
                url: 'Thanks',
                views: {
                    'content@': {
                        templateUrl : 'views/Thanks.html',
                        controller  : 'SurveyController'
                    }
                }
            })

            .state('app.BigScreen', {
                url: 'BigScreen',
                views: {
                    'content@': {
                        templateUrl : 'views/BigScreen.html',
                        controller  : 'BigScreenController'
                    }
                }
            })


            // route for the menu page
            .state('app.Result', {
                url: 'Result',
                views: {
                    'content@': {
                        templateUrl : 'views/Result.html',
                        controller  : 'ResultController'
                    }
                }
            })

    
        $urlRouterProvider.otherwise('/');
    })
;









