app.controller('LoginController', ['$window', '$scope', '$location', 'authFact', '$cookieStore', function ($window, $scope, $location, authFact, $cookieStore) {

    $scope.fbLogin = function () {
        $cookieStore.put('user', "Guest");
        var accessToken = "12344567";
        authFact.setAccessToken(accessToken);
        window.location.href = '#!/home';
        console.log("Home Location called");
    };
}]);