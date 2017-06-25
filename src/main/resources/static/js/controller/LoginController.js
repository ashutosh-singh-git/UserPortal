bController.controller('LoginController', ['$window', '$scope', '$rootScope', 'CommonService', '$timeout', '$location', 'authFact', '$cookieStore',
    function ($window, $scope, $rootScope, CommonService, $timeout, $location, authFact, $cookieStore) {

        $scope.login_url = config.BASE_URL + config.LOGIN;
        $scope.register_url = config.BASE_URL + config.REGISTER;
        $scope.user = new UserModel();
        $scope.islogin = true;
        $scope.error;

        $scope.login = function () {
            console.log("Validating user: ");
            console.log($scope.user);
            CommonService.logUserIn($scope.login_url, $scope.user).then(function (data) {
                $scope.onSuccess(data);
                $scope.user = '';
            }, function (reason) {
                console.log(reason.status);
                $scope.error = reason.data.error;
                /*alert('Failed;' + 'Status: ' + reason.status + ',' +
                 'error: ' + reason.data.error + ', message: ' + reason.data.message);*/
            });
        };

        $scope.register = function () {
            console.log("Registering user: ");
            console.log($scope.user);
            CommonService.logUserIn($scope.register_url, $scope.user).then(function (data) {
                $scope.onSuccess(data);
            }, function (reason) {
                console.log(reason.status);
                $scope.error = reason.data.message;
                /*alert('Failed;' + 'Status: ' + reason.status + ',' +
                 'error: ' + reason.data.error + ', message: ' + reason.data.message);*/

            });
        };

        $scope.onSuccess = function (data) {
            $scope.user = data.data;
            console.log($scope.user);
            var accessToken = btoa($scope.user.username + ':' + $scope.user.password);
            authFact.setAccessToken(accessToken);
            authFact.setUserId($scope.user.userId);
            authFact.setUser($scope.user.username);
            document.location.reload();
        };
    }]);