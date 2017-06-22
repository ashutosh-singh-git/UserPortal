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

    var approver = new ApproverViewModel();
    var tags = [];
    var categories = [];
};

var Card = function() {
    var title;
    var content;
    var articleWebUrl;
    var articleSourceLogo;
    var articleSourceName;
       
    var media = {};
    media.mediaType = '';
    media.mediaUrl = '';
    media.mediaCredit = '';
    media.template = '';
    media.weight = '';
};

var ApproverViewModel = function () {
    var liveDays;
    var ranking;
    var liveOnDate;
    var comments;
}