app.factory('authFact', ['$cookieStore', function ($cookieStore) {
    var authFact = {};

    authFact.setAccessToken = function (accessToken) {
        $cookieStore.put('accessToken', accessToken);
    };

    authFact.getAccessToken = function () {
        return $cookieStore.get('accessToken');
    };

    authFact.getUserId = function () {
        return $cookieStore.get('userId');
    };

    authFact.setUserId = function (userId) {
        $cookieStore.put('userId', userId);
    };

    authFact.getUser = function () {
        return $cookieStore.get('user');
    };

    authFact.setUser = function (username) {
        var user = $cookieStore.put('user', username);
    };

    authFact.setProfileId = function (profile) {
        $cookieStore.put('profileId', profile);
    };

    authFact.getProfileId = function () {
        return $cookieStore.get('profileId');
    };

    authFact.logoutOut = function () {
        $cookieStore.remove('userId');
        $cookieStore.remove('accessToken');
        $cookieStore.remove('user');
        $cookieStore.remove('template');
        $cookieStore.remove('profileId');
    };

    return authFact;
}]);
