(function() {
    angular.module(dollarTrackerAppName)
    .controller('homeCtrl', ['$scope', 'dashboard', homeCtrl]);
    function homeCtrl($scope, dashboard) {
     dashboard.stats().then(function (results) {
                $scope.summary = results.data.data;
            });
    }

})();