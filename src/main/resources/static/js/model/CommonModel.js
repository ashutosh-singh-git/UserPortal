var UserModel = function () {
    var deck = {};
    deck.userId = '';
    deck.firstName = 'Ashutosh';
    deck.lastName = 'Singh';
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
};

var CourseListModel = function () {
    var courses = [];
};

var CourseModel = function () {
    var course = {};
    course.userId = '';
    course.profileId = '';
    course.courseName = '';
    course.duration = '';
    course.fees = '';
    course.status = '';
};

var ProfileList = function () {
    var profile = [];
};