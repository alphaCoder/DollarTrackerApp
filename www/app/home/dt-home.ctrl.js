(function() {
    angular.module(dollarTrackerAppName)
    .controller('homeCtrl', ['$scope', 'dashboard', homeCtrl]);
    function homeCtrl($scope, dashboard) {
     	dashboard.stats().then(function (results) {
                $scope.summary = results.data.data;
        });

        $scope.items = [{
			    "date": "Jan 2, 2015",
			    "category": "beer",
			    "amount": 612.45,
			    "place": "Buffalo Wild Wings",
			    "comment": "Hosted a party "
			  }, {
			    "date": "Jan 15, 2016",
			    "category": "fork",
			    "amount": 324.54,
			    "place": "Dry Hop",
			    "comment": "Sudden visit by a friend"
			  }, {
			    "date": "Feb 04, 2016",
			    "category": "pricetags",
			    "amount": 200.00,
			    "place": "Water Tower",
			    "comment": "Unexpected shopping"
			  }];
    }

})();