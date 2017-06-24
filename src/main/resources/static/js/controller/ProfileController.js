app.controller('ProfileController', ['$scope', 'CommonService', '$timeout', '$rootScope', '$filter',
    function ($scope, CommonService, $timeout, $rootScope, $filter) {
        $scope.user_url = config.BASE_URL + config.GET_PROFILE;

        $scope.selectedUser = new UserModel()
        // $scope.selectedUser.firstName = 'Ashutosh';
        // $scope.selectedUser.lastName = 'Singh';
        $scope.isEdit = false;
        $scope.dataPresent = false;

        $rootScope.$on("CallParentMethod", function () {
            init();
        });

        var init = function () {
            $scope.getUserDetails();
        }

        $scope.replacePlaceHolder = function (str, placeholder, value) {
            return str.replace("{" + placeholder + "}", value);
        }

        $scope.dataLoaded = false;

        $scope.getUserDetails = function () {
            if ($scope.user_url != null) {
                CommonService.getResponse($scope.replacePlaceHolder($scope.user_url, "USER_ID", $scope.getUserId())).then(function (data) {
                    console.log(data.data);
                    $scope.selectedUser = data.data;
                    $scope.dataPresent = true;
                    $scope.setUserName($scope.selectedUser.firstName);

                    $timeout(function () {
                        $scope.dataLoaded = true;
                    }, 100);

                }, function (reason) {
                    alert('Failed: ' + reason);
                });
            }
        };

        init();

        $scope.updateProfile = function () {
            $scope.selectedUser.userId = $scope.getUserId();
            $scope.selectedUser.birthDate = $filter('date')($scope.birthDate, "yyyy-MM-dd");
            console.log($scope.selectedUser);
            // return;
            CommonService.postRequest($scope.update_deck_url, $scope.selectedUser).then(
                function (data) {
                    console.log(data.data);
                    $scope.selectedUser = data.data;
                    // $scope.getAllDecks();
                }, function (reason) {
                    alert('Failed: ' + reason.data.message);
                });
        };

        $scope.replacePlaceHolder = function (str, placeholder, value) {
            return str.replace("{" + placeholder + "}", value);
        }

        objectToStringArray = function (deck) {
            delete deck.categories;
            delete deck.tags;
            delete deck.cards;
            return deck;
        };
    }]);
