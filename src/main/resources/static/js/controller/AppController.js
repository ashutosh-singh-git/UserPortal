bController.controller('AppController', ['$scope', 'authFact', '$rootScope', '$cookieStore',
    function ($scope, authFact, $rootScope, $cookieStore) {
        var self = this;
        $scope.username = authFact.getUser().name;

        $scope.setUserId = function (status) {
            $cookieStore.put('userId', status);
            $rootScope.$emit("CallParentMethod", {});
        };

        $scope.getUserId = function () {
            var status = $cookieStore.get('userId');
            if (status == undefined) {
                return '1';
            }
            return status;
        };

        $scope.selectedTemplate = $cookieStore.get('template');

        $scope.setInnerPage = function(path){
            $cookieStore.put('template', path);
            $scope.selectedTemplate = path;
        }

        $scope.getInnerPage = function(){
            $scope.selectedTemplate = $cookieStore.get('template');
        }
    }]);