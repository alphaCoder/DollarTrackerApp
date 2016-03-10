( function(){
angular.module('DollarTrackerApp')
.directive('signedInFooter', signedInFooter);
function signedInFooter($state) {
    return {
        restrict:'E',
        templateUrl: 'app/footer/dt-footer.html',
        link: function (scope,rootScope, element, attrs, state) {
        	
        }
    }
}})();