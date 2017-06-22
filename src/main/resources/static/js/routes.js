app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {

    $routeProvider.when("/login",
        {
            templateUrl: 'login.html',
            controller: 'LoginController'
        }).when("/home",
        {
            templateUrl: 'home.html',
            authenticated: true
        }).otherwise("/",
        {
            templateUrl: 'index.html',
            controller: 'LoginController'
        });
}]);

app.run(["$rootScope", "$location", "authFact", function ($rootScope, $location, authFact) {
    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        console.log("Redirection Starts " + $location.path());
        // $location.path('/login');
        if (next.$$route != undefined && next.$$route.authenticated) {
            var userAuth = authFact.getAccessToken();
            if (userAuth == undefined) {
                console.log("Redirecting to Login Page")
                $location.path('/login');
            }
        }
        if ($location.path() == "/" && authFact.getAccessToken() != undefined) {
            console.log("Already Logged in");
            $location.path('/home');
            // $location.path('/login');
        }
    });
}]);
