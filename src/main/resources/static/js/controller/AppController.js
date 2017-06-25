bController.controller('AppController', ['$scope', 'authFact', '$rootScope', '$cookieStore',
    function ($scope, authFact, $rootScope, $cookieStore) {
        var self = this;
        $scope.tabs = [true, false, false, false];
        $scope.username = authFact.getUser();

        $scope.setUserName = function (name) {
            authFact.setUser(name);
        };

        $scope.getUserId = function () {
            return authFact.getUserId();
        };

        $scope.logout = function () {
            authFact.logoutOut();
            document.location.reload();
        };

        $scope.setProfile = function (profile) {
            authFact.setProfileId(profile);
        };

        $scope.setInnerPage = function (path) {
            $cookieStore.put('template', path);
            $scope.selectedTemplate = path;
        };

        $scope.getInnerPage = function () {
            if ($cookieStore.get('template') == undefined) {
                $scope.selectedTemplate = 'profile.htm';
                return;
            }
            $scope.selectedTemplate = $cookieStore.get('template');
        };

        $scope.getInnerPage();
    }]);