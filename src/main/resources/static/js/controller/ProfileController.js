app.controller('ProfileController', ['$scope', 'CommonService', '$timeout', '$rootScope',
    function ($scope, CommonService, $timeout, $rootScope) {
        $scope.user_url = config.BASE_URL + config.GET_PROFILE;

        $scope.selectedUser = new UserModel()
        $scope.selectedUser.firstName = 'Ashutosh';
        $scope.selectedUser.lastName = 'Singh';
        $scope.isEdit = false;
        $scope.dataPresent = false;

        $rootScope.$on("CallParentMethod", function () {
            init();
        });

        var init = function () {
            // $scope.getUserDetails();
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
            console.log($scope.selectedUser);
            return;
            CommonService.putRequest($scope.update_deck_url, $scope.selectedUser).then(
                function (data) {
                    console.log(data.data);
                    $scope.selectedUser = data.data;
                    // $scope.getAllDecks();
                }, function (reason) {
                    alert('Failed: ' + reason.data.message);
                });
        };

        $scope.getDeck = function (deckId) {
            $scope.SelectedDeck = {};
            $scope.cardIndex = 0;
            if (deckId == null) {
                if ($scope.AllDecks && $scope.AllDecks.length > 0) {
                    deckId = $scope.AllDecks[0].deckId;
                }
            }
            if (deckId != null) {
                CommonService.getResponse($scope.replacePlaceHolder($scope.deck_url, PLACEHOLDER_DECK_ID, deckId)).then(
                    function (data) {
                        $scope.SelectedDeck = data.data;
                        console.log(JSON.stringify(data.data));
                        $scope.cardIndex = 0;

                    }, function (reason) {
                        alert('Failed: ' + reason);
                    });
            }
        }

        $scope.replacePlaceHolder = function (str, placeholder, value) {
            return str.replace("{" + placeholder + "}", value);
        }

        $scope.loadCategories = function ($query) {

            return CommonService.getCachedResponse($scope.categories_url).then(function (response) {
                var categories = response.data;
                return categories.filter(function (category) {
                    return category.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
                });
            }, function (e) {
                return "Error";
            })
        };

        $scope.removeCard = function () {
            var cardID = $scope.SelectedDeck.cards[$scope.cardIndex].id;
            //alert("Service to be integrated.. Removed card :" + cardID);
            var index = $scope.cardIndex;
            if (index == $scope.SelectedDeck.cards.length - 1) {
                index = 0;
            }
            $scope.SelectedDeck.cards.splice($scope.cardIndex, 1);
            $scope.cardIndex = index;
        };

        $scope.removeDeck = function () {
            $scope.dataLoaded = false;
            var deckID = $scope.SelectedDeck.deckId;

            CommonService.deleteResponse($scope.replacePlaceHolder($scope.deck_url, PLACEHOLDER_DECK_ID, deckID)).then(
                function (data) {
                    console.log("Deleted deckId:" + deckID);
                    $scope.cardIndex = 0;
                    $scope.dataLoaded = false;
                }, function (reason) {
                    alert('Failed: ' + reason.data.message);
                    $scope.dataLoaded = true;
                });
            if (!$scope.dataLoaded) {
                $scope.getAllDecks();
            }
        };

        $scope.updateCard = function () {
            var card = $scope.SelectedDeck.cards[$scope.cardIndex];
            var cardId = card.id;
            CommonService.putRequest($scope.replacePlaceHolder($scope.update_card_url, PLACEHOLDER_CARD_ID, cardId), card).then(
                function (data) {
                    console.log("updated cardId:" + cardId);
                    $scope.getAllDecks();
                }, function (reason) {
                    alert('Failed: ' + reason.data.message);
                });
        };

        objectToStringArray = function (deck) {
            delete deck.categories;
            delete deck.tags;
            delete deck.cards;
            return deck;
        };
    }]);
