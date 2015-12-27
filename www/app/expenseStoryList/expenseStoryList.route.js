(function() {
 angular.module(dollarTrackerAppName)
.config(['$stateProvider', function($stateProvider){
  $stateProvider
     .state('list', {
            url: "/list",
            templateUrl: "app/expenseStoryList/expenseStoryList.html",
            controller:"expenseStoryListCtrl"
    })

 }]);
  })();