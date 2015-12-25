(function() {
angular.module('DollarTrackerApp')
.controller('loginCtrl', ['$scope', '$http', '$state', '$q','$auth', '$ionicPopup', 'user', loginCtrl]);

function loginCtrl($scope, $http, $state, $q, $auth,$ionicPopup, user) {
    $scope.user = {};
    
    $scope.submit = function login() {
//        $state.go('home');
        
     if (angular.isUndefined($scope.password) || angular.isDefined($scope.password) && $scope.password.length == 0
        || angular.isUndefined($scope.email)
        || angular.isDefined($scope.email) && $scope.email.length == 0) {
            console.log('Email or Password field cannot be empty');
            return;
        }
        var deferred = $q.defer();

        $auth.login({
            email: $scope.email,
            password: $scope.password
        }).then(function (res) {
          if(res && res.data && res.data.success) {
            var payload = $auth.getPayload();
            if (payload && payload.UserInfo) {
                user.setUser(payload.UserInfo);
                $state.go('home');
            }
          }
        else{
            $scope.showLoginError();
        }
            deferred.resolve();
        })
        .catch(function (err) {
            $scope.showLoginError();
            console.log('Invalid email or password');
            deferred.reject();
        });
        return deferred.promise;
    }
    

  // An elaborate, custom popup
  $scope.showLoginError = function LoginError() {
   var alertPopup = $ionicPopup.alert({
     title: 'Login Error',
     template: 'Invalid username or password'
   });

   alertPopup.then(function(res) {
     console.log('Thank you');
   });
 }

}
})();