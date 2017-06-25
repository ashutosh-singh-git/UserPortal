var bController = angular.module('BluohController', []);
var bService = angular.module('BluohService', []);
var app = angular.module('bluohApp', ['BluohController', 'BluohService', 'ngRoute', 'ngCookies', 'frapontillo.bootstrap-switch']);

var config = undefined;
/*var PLACEHOLDER_DECK_ID = "DECK_ID";
 var PLACEHOLDER_CARD_ID = "CARD_ID";*/

angular.element(function () {
    $.get("rsc/config/config.json", function (data) {
        config = data;
        angular.bootstrap(document, ['bluohApp']);
    })
        .fail(function () {
            alert("Error loading configuration");
        })
});