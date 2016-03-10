(function() {
    angular.module(dollarTrackerAppName)
    .controller('storyCtrl', ['$scope','$ionicModal', storyCtrl]);
    function storyCtrl($scope,$ionicModal) {


    	$scope.stories = [
    		{"name":"January 12 - January 17", "id":0,
    		"expenses":[{
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
			  }]
    		},
    		{"name":"January 18 - January 21", "id":1},
            {"name":"January 24 - January 31", "id":2}];

             /*
			   * if given group is the selected group, deselect it
			   * else, select the given group
			   */
			  $scope.toggleGroup = function(group,$index) {
			  	$scope.parentIndex = $index;
			    if ($scope.isGroupShown(group)) {
			      $scope.shownGroup = null;
			    } else {
			      $scope.shownGroup = group;
			    }
			  };
			  $scope.isGroupShown = function(group) {
			    return $scope.shownGroup === group;
			  };

			  $ionicModal.fromTemplateUrl('templates/modal.html', {
			    scope: $scope,
			  }).then(function(modal, $index) {
			    $scope.modal = modal;
			  });

			  $scope.setDataModal = function($index){
			    $scope.itemIndex = $index;
			   	var story = $scope.stories[$scope.parentIndex];
			    var  expenses = story.expenses;
			    var item = expenses[$scope.itemIndex];
			    $scope.obj={"modalDate":item.date, "modalPlace":item.place, "modalAmount":item.amount,             "modalComment":item.comment, "modalCategory":item.category};
			  };
	  
			  $scope.saveItem =function(obj){
			    $scope.date = obj.modalDate;
			    $scope.place = obj.modalPlace;
			    $scope.comment = obj.modalComment;
			    $scope.amount = obj.modalAmount;
			    $scope.category = obj.modalCategory;
			    $scope.items[$scope.itemIndex]={"date":$scope.date,"place":$scope.place,"comment":$scope.comment,"amount":$scope.amount, "category":$scope.category};
			    $scope.modal.hide();
			  };

			  $scope.removeData = function($index){
			    var arr = $scope.items;
			    arr.splice($index,1);
			    $scope.items = arr;
			  };

    }


})();