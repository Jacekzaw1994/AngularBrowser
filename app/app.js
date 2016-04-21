angular.module('app', [
    'ngRoute',
    'app.controllers'
]).config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/',{
            templateUrl: 'views/search.html',
            controller: 'PostController'
        }).when('/post/:id', {
            templateUrl: 'views/singlepost.html',
            controller: 'SinglePostController'
        }).otherwise({
            redirectTo: '/'
        });
    }]);