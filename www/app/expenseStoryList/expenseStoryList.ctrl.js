(function() {
 angular.module(dollarTrackerAppName)
 .controller('expenseStoryListCtrl', ['$scope', 'dashboard', expenseStoryCtrl]);
    function expenseStoryCtrl($scope, dashboard) {
          $scope.init = function () {
            dashboard.summary().then(function (results) {
                console.log("resolve -summary");
                console.log(results);
                $scope.summary = results.data.data;
            });
        }
        $scope.init();
    }
})();