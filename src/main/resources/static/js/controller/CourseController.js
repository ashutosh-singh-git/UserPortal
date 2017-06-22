bController.controller('CourseController', ['$scope', 'CommonService', '$timeout',
    function ($scope, CommonService, $timeout) {
        $scope.isDialogVisible = false;
        $scope.course_url = config.BASE_URL + config.GET_COURSES;
        $scope.course_url_post = config.BASE_URL + config.COURSE;

        $scope.course = new CourseListModel();
        $scope.crse = new CourseModel();
        var init = function () {
            $scope.getUserCourse();
        }

        $scope.replacePlaceHolder = function (str, placeholder, value) {
            return str.replace("{" + placeholder + "}", value);
        }

        $scope.dataLoaded = false;

        $scope.getUserCourse = function () {
            if ($scope.course_url != null) {
                CommonService.getResponse($scope.replacePlaceHolder($scope.course_url, "USER_ID",
                    $scope.getUserId())).then(function (data) {
                    console.log(data.data);
                    $scope.course = data.data;

                    $timeout(function () {
                        $scope.dataLoaded = true;
                    }, 100);

                }, function (reason) {
                    alert('Failed: ' + reason);
                });
            }
        };

        init();

        $scope.addCourse = function () {
            if ($scope.course_url_post != null) {
                $scope.crse.userId = $scope.getUserId();
                $scope.crse.status = 'IN_PROGRESS';
                if ($scope.crse.courseName == undefined || $scope.crse.duration == undefined || $scope.crse.fees == undefined) {
                    alert("All select fields are mandatory!")
                    return;
                }
                console.log("Course: " + $scope.crse.duration);
                CommonService.postRequest($scope.course_url_post, $scope.crse).then(function (data) {
                    console.log(data.data);
                    $scope.getUserCourse();
                    $timeout(function () {
                        $scope.dataLoaded = true;
                    }, 100);

                }, function (reason) {
                    alert('Failed: ' + reason);
                });
            }
        }

    }])

    .filter('titleCase', function () {
        return function (input) {
            input = input || '';
            return input.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        };
    });