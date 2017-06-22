app.controller('LoginController', ['$window', '$scope', 'CommonService', '$timeout', '$location', 'authFact', '$cookieStore',
    function ($window, $scope, CommonService, $timeout, $location, authFact, $cookieStore) {

        $scope.user_url = config.BASE_URL + config.USER;
        $scope.user = new UserModel();
        $scope.islogin = true;

        $scope.login = function () {
            console.log("Validating user");
            CommonService.postRequest($scope.user_url, $scope.user).then(function (data) {
                console.log(data.data);
                // $scope.selectedUser = data.data;

                $timeout(function () {
                    $scope.dataLoaded = true;
                }, 100);

            }, function (reason) {
                alert('Failed: ' + reason);
            });
            /*$cookieStore.put('user', "Guest");
             var accessToken = "12344567";
             authFact.setAccessToken(accessToken);
             window.location.href = '#!/home';
             console.log("Home Location called");*/
        };
    }]);