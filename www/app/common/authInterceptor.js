(function(){
angular.module('DollarTrackerApp')
.factory('authInterceptor', ['$injector', '$q', authInterceptor]);
function authInterceptor($injector, $q) {
  var checkStatus = function (status) {
        var state = $injector.get('$state');
        if (status >= 400) {
            if (status == 404) {
                state.go('err.404');
            }
            //else if (status == 401) {
                //user.cleanAll();
              //  state.go('logout');
       // } 
        //else {
        //        state.go('err.oops');
        //    }
        }
    }
    return {
        response: function (response) {
            checkStatus(response.status);
            return response || $q.when(response);
        },
        responseError: function (rejection) {
            checkStatus(rejection.status);
            return $q.reject(rejection);
        }
    }
  
}
})();
