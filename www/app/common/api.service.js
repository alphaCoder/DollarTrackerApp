(function(){
angular.module('DollarTrackerApp')
.factory('api', ['$http', 'Upload', api]);
                 
function api($http, Upload) {

    var api = {}
    var BASE_URL= 'http://dev-dollartracker.azurewebsites.net/api/'
    api.getUrl = function (s) {
        // strip any leading forward slash
        if (s.charAt(0) == '/') s = s.substring(1);
        
        return BASE_URL + s;
    }

    api.upload = function (path, json, files) {
        // path is like "Orders" (not :"http://..../api/Orders")...we fill in the blanks
        // json is an string
        // files is optional. it can be a single file or an array of files from ng file upload
        // https://github.com/danialfarid/ng-file-upload
        var url = api.getUrl(path);
        var cfg = {
            url: url,
            fields: { 'DTD': json },
            file: files
        }
        return Upload.upload(cfg);
    }

    api.get = function (path) {
        // not much, just expand path
        var url = api.getUrl(path);
        return $http.get(url);
    }

    api.post = function (path, data) {
        var url = api.getUrl(path);
        return $http.post(url, data);
    }

    api.deleteById = function(path, id) {
        var url = api.getUrl(path) + '/' + id;
        return $http.delete(url);
    }

    return api;

}})();