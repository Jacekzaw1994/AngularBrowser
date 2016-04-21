angular.module('app.controllers', [])
    .controller('PostController', ['$scope','$http', function($scope, $http){
        $http.get('data/data.json').success(function(data){
            $scope.posts = data;
        });
    }])
    .controller('SinglePostController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
        $http.get('data/data.json').success(function(data){
            $scope.post = data["posts"][$routeParams.id - 1];
            $scope.user = data["users"];
            $scope.comments = data['comments'];
        })
    }]);