var app = angular.module('mainApp', ['angucomplete-alt']);
app.controller('usersController', ['$http','$scope', function($http,$scope) {
    $scope.getUserLists = function () {
        var apI = "https://jsonplaceholder.typicode.com/comments"
        var userApi = "json/users.json";
        $http.get(userApi)
            .then(function (response) {
                console.log(response);
                $scope.usersLists = response.data;
            },function (error){
                console.log(error);
            });

    }

    // $scope.getUserLists();

    $scope.getComments = function (query, timeout) {
      // return $http.get('https://jsonplaceholder.typicode.com/comments?email='+ query);
      return $http.get('json/users.json?email='+ query);

    }
}]);