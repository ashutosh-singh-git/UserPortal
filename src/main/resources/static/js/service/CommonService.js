bService.service('CommonService', ['$cookieStore', '$http', 'authFact', function ($cookieStore, $http, authFact) {

    var self = this;

    var config = {
        headers: {
            'Authorization': "Basic " + authFact.getAccessToken()
        }
    };

    self.logUserIn = function (url, data) {
        return $http.post(url, data);
    };

    self.getResponse = function (url) {
        return $http.get(url, config);
    };

    self.getCachedResponse = function (url) {
        return $http.get(url, config, {cache: true});
    };

    self.deleteResponse = function (url) {
        return $http.delete(url, config);
    };

    self.postRequest = function (url, data) {
        return $http.post(url, data, config);
    };

    self.putRequest = function (url, data) {
        return $http.put(url, data, config);
    };

}]);