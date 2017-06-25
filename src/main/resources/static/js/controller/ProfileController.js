app.controller('ProfileController', ['$scope', 'CommonService', '$timeout', '$rootScope', '$filter',
    function ($scope, CommonService, $timeout, $rootScope, $filter) {

        $scope.get_profile_url = config.BASE_URL + config.GET_PROFILE;
        $scope.update_profile_url = config.BASE_URL + config.PROFILE + config.UPDATE_PROFILE;
        $scope.userprofile_url = config.BASE_URL + config.USER_PROFILE;
        $scope.get_userprofile_url = config.BASE_URL + config.GET_USER_PROFILE;

        $scope.selectedUser = new UserModel();
        $scope.profiles = new ProfileList();
        // $scope.selectedUser.firstName = 'Ashutosh';
        // $scope.selectedUser.lastName = 'Singh';
        $scope.isEdit = false;
        $scope.dataPresent = false;

        $rootScope.$on("CallParentMethod", function () {
            init();
        });

        var init = function () {
            $scope.getUserProfiles();
        };

        $scope.replacePlaceHolder = function (str, placeholder, value) {
            return str.replace("{" + placeholder + "}", value);
        };

        $scope.dataLoaded = false;

        $scope.getUserProfiles = function () {
            if ($scope.get_userprofile_url != null) {
                var url = $scope.replacePlaceHolder($scope.get_userprofile_url, "USER_ID", $scope.getUserId());
                CommonService.getResponse(url).then(function (data) {
                    $scope.profiles = data.data;
                    console.log($scope.profiles);

                }, function (reason) {
                    alert('Failed: ' + reason);
                });
            }
        };

        $scope.getUserDetails = function (profileId) {
            var url = $scope.replacePlaceHolder($scope.get_profile_url, "PROFILE_ID", profileId);
            if ($scope.get_profile_url != null) {
                CommonService.getResponse(url).then(function (data) {
                    console.log(data.data);
                    $scope.selectedUser = data.data;
                    $scope.dataPresent = true;
                    // $scope.setUserName($scope.selectedUser.firstName);

                    $timeout(function () {
                        $scope.dataLoaded = true;
                    }, 100);

                }, function (reason) {
                    alert('Failed: ' + reason);
                });
            }
        };

        init();

        $scope.updateProfile = function (profileId) {
            $scope.selectedUser.profileId = profileId;
            CommonService.postRequest($scope.update_profile_url, $scope.selectedUser).then(
                function (data) {
                    console.log(data.data);
                    $scope.selectedUser = data.data;
                    $scope.isEdit = false;
                    document.location.reload();
                }, function (reason) {
                    alert('Failed: ' + reason.data.message);
                });
        };

        $scope.replacePlaceHolder = function (str, placeholder, value) {
            return str.replace("{" + placeholder + "}", value);
        };


        objectToStringArray = function (deck) {
            delete deck.categories;
            delete deck.tags;
            delete deck.cards;
            return deck;
        };
    }]);
