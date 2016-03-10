( function(){
angular.module('DollarTrackerApp')
.directive('dtCard', dtCard);
function dtCard() {
    return {
        restrict:'E',
        templateUrl: 'app/expenseCard/dt-card.html',
        link: function (scope,rootScope, element, attrs) {
        	
        }
    }
}})();