( function(){
angular.module('DollarTrackerApp')
.directive('signedInFooter', signedInFooter);
function signedInFooter() {
    return {
        restrict:'E',
        templateUrl: 'app/footer/signedInFooter.html',
        scope: {}
    }
}})();