var UserModel = function () {
    var deck = {};
    deck.userId = '';
    deck.firstName='';
    deck.lastName='';
    deck.email='';
    deck.gender = '';
    deck.address = '';
    deck.pincode = '';
    deck.mobileNo = '';
    deck.birthDate = '';
    deck.qualification = '';
};

var UserAuth = function () {
    var user = {};
    user.username = '';
    user.password = '';
}

var CourseListModel = function () {
    var courses = []
}

var CourseModel = function () {
    var course = {};
    course.userId = '';
    course.courseName = '';
    course.duration = '';
    course.fees = '';
    course.status = '';
}