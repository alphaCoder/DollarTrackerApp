(function() {
 angular.module(dollarTrackerAppName)
.factory("dashboard", ['$http', 'api', dashboard]);
function dashboard($http, api) {

    var dashboard = {
        getExpenseStories : getExpenseStories,
        summary : summary,
        stats: stats
    };
    
    return dashboard;
    function getExpenseStories() {
        return api.get('expenseStory');
    }

    function summary() {
        return api.get('dashboard');
    }

    function stats() {
        return api.get('dashboardStats');
    }
}
})();
