/**
 * Created by vbudhram on 4/26/15.
 */
var app = angular.module('dlp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/home.html'
        })
        .state('build', {
            url: '/build',
            templateUrl: 'partials/build.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html'
        });
}]);