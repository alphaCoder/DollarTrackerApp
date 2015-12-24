(function() {
angular.module('DollarTrackerApp')
.controller('loginCtrl', ['$scope', '$http', '$state', loginCtrl]);

function loginCtrl($scope, $http, $state) {
    $scope.user = {};
    
    $scope.submit = function login() {
        $state.go('home');
    }
}

})();