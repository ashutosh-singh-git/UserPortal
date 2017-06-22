app.controller('DeckController', ['$scope', 'CommonService', '$timeout', '$rootScope',
    function ($scope, CommonService, $timeout, $rootScope) {
        var self = this;

        self.user_url = config.BASE_URL + config.GET_USER;

        $scope.selectedUser = new UserModel();

        $rootScope.$on("CallParentMethod", function () {
            init();
        });

        var init = function () {
            self.getUserDetails();
        }

        self.replacePlaceHolder = function (str, placeholder, value) {
            return str.replace("{" + placeholder + "}", value);
        }

        $scope.dataLoaded = false;

        self.getUserDetails = function () {
            // $scope.AllDecks = [];
            if (self.user_url != null) {
                CommonService.getResponse(self.replacePlaceHolder(self.user_url, "USER_ID", $scope.getUserId())).then(function (data) {
                    $scope.selectedUser = data.data;
                    /*if (data.data["last"] == true) {
                        $scope.deckPageNo = 0;
                    }
                    console.log($scope.AllDecks);
                    self.getDeck(null);*/

                    $timeout(function () {
                        $scope.dataLoaded = true;
                    }, 100);

                }, function (reason) {
                    alert('Failed: ' + reason);
                });
            }
        };

        init();
        self.getDeck = function (deckId) {
            $scope.SelectedDeck = {};
            $scope.cardIndex = 0;
            if (deckId == null) {
                if ($scope.AllDecks && $scope.AllDecks.length > 0) {
                    deckId = $scope.AllDecks[0].deckId;
                }
            }
            if (deckId != null) {
                CommonService.getResponse(self.replacePlaceHolder(self.deck_url, PLACEHOLDER_DECK_ID, deckId)).then(
                    function (data) {
                        $scope.SelectedDeck = data.data;
                        console.log(JSON.stringify(data.data));
                        $scope.cardIndex = 0;

                    }, function (reason) {
                        alert('Failed: ' + reason);
                    });
            }
        }

        self.replacePlaceHolder = function (str, placeholder, value) {
            return str.replace("{" + placeholder + "}", value);
        }

        $scope.loadCategories = function ($query) {

            return CommonService.getCachedResponse(self.categories_url).then(function (response) {
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

            CommonService.deleteResponse(self.replacePlaceHolder(self.deck_url, PLACEHOLDER_DECK_ID, deckID)).then(
                function (data) {
                    console.log("Deleted deckId:" + deckID);
                    $scope.cardIndex = 0;
                    $scope.dataLoaded = false;
                }, function (reason) {
                    alert('Failed: ' + reason.data.message);
                    $scope.dataLoaded = true;
                });
            if (!$scope.dataLoaded) {
                self.getAllDecks();
            }
        };

        $scope.updateDeck = function () {
            var deck = objectToStringArray($scope.SelectedDeck);
            var deckId = deck.deckId;
            console.log(deck);
            // return;
            CommonService.putRequest(self.replacePlaceHolder(self.update_deck_url, PLACEHOLDER_DECK_ID, deckId), deck).then(
                function (data) {
                    console.log("updated deckId:" + deckId);
                    self.getAllDecks();
                }, function (reason) {
                    alert('Failed: ' + reason.data.message);
                });
        };

        $scope.updateCard = function () {
            var card = $scope.SelectedDeck.cards[$scope.cardIndex];
            var cardId = card.id;
            CommonService.putRequest(self.replacePlaceHolder(self.update_card_url, PLACEHOLDER_CARD_ID, cardId), card).then(
                function (data) {
                    console.log("updated cardId:" + cardId);
                    self.getAllDecks();
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
