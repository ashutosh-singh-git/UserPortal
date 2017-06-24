app.factory('authFact', ['$cookieStore', function ($cookieStore) {
    var authFact = {};

    authFact.setAccessToken = function (accessToken) {
        $cookieStore.put('accessToken', accessToken);
    };

    authFact.getAccessToken = function () {
        return $cookieStore.get('accessToken');
    };

    authFact.getUserId = function () {
        var status = $cookieStore.get('userId');
        /*if (status == undefined) {
         return '1';
         }*/
        return status;
    };

    authFact.getUser = function () {
        return $cookieStore.get('user');
    };

    authFact.setUser = function (username) {
        var user = $cookieStore.put('user', username);
    };


    authFact.logoutOut = function () {
        $cookieStore.remove('userId');
        $cookieStore.remove('accessToken');
    };
    return authFact;
}]);
