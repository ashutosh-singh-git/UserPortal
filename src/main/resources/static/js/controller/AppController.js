bController.controller('AppController', ['$scope', 'authFact', '$rootScope', '$cookieStore',
    function ($scope, authFact, $rootScope, $cookieStore) {
        var self = this;
        $scope.username = authFact.getUser();

        $scope.setUserName = function (name) {
            authFact.setUser(name);
        }

        $scope.getUserId = function () {
            return authFact.getUserId();
        };

        $scope.logout = function () {
            authFact.logoutOut();
            document.location.reload();
        }

        $scope.selectedTemplate = $cookieStore.get('template');

        $scope.setInnerPage = function (path) {
            $cookieStore.put('template', path);
            $scope.selectedTemplate = path;
        }

        $scope.getInnerPage = function () {
            $scope.selectedTemplate = $cookieStore.get('template');
        }
    }]);