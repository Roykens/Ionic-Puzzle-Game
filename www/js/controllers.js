/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
})

.controller('FriendsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ProfileCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('GalleryCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

    $scope.puzzels = [];
    if($stateParams.level==1){
        $scope.puzzels.push(
            {
                titre : "Les Simpsons",
                nom : "simpson",
                lien : "app.game({pack: 'simpson', level: '3'})",
                src : "img/simpson.jpg",
                time : 7,
                pts : 50
            }
        );
        $scope.puzzels.push(
            {
                titre : "Bob eponge",
                nom : "bobleponge",
                lien : "app.game({pack: 'bobleponge', level: '3'})",
                src : "img/bobleponge.jpg",
                time : 5,
                pts : 40
            }
        );
        $scope.puzzels.push(
            {
                titre : "Dora L'exploratrice",
                nom : "dora_exploratrice",
                lien : "app.game({pack: 'dora_exploratrice', level: '3'})",
                src : "img/dora_exploratrice.jpg",
                time : 7,
                pts : 56
            }
        );
        $scope.puzzels.push(
            {
                titre : "Pokemon",
                nom : "pokemon",
                lien : "app.game({pack: 'pokemon', level: '3'})",
                src : "img/pokemon.jpg",
                time : 10,
                pts : 30
            }
        );
    }else if($stateParams.level==2){
        $scope.puzzels.push(
            {
                titre : "Les Mini Mois",
                nom : "minimos",
                lien : "app.game({pack: 'minimos', level: '4'})",
                src : "img/minimos.jpg",
                time : 7,
                pts : 50
            }
        );
        $scope.puzzels.push(
            {
                titre : "Les Avengers",
                nom : "avenger",
                lien : "app.game({pack: 'avenger', level: '4'})",
                src : "img/avenger.jpg",
                time : 5,
                pts : 40
            }
        );
        $scope.puzzels.push(
            {
                titre : "Spider Man",
                nom : "spiderman",
                lien : "app.game({pack: 'spiderman', level: '4'})",
                src : "img/spiderman.jpg",
                time : 7,
                pts : 56
            }
        );
        $scope.puzzels.push(
            {
                titre : "Hunter X Hunter",
                nom : "hunterxhunter",
                lien : "app.game({pack: 'hunterxhunter', level: '4'})",
                src : "img/hunterxhunter.jpg",
                time : 10,
                pts : 30
            }
        );
    }else if($stateParams.level==3){
        $scope.puzzels.push(
            {
                titre : "One Peace",
                nom : "one_piece",
                lien : "app.game({pack: 'one_piece', level: '5'})",
                src : "img/one_piece.jpg",
                time : 7,
                pts : 50
            }
        );
        $scope.puzzels.push(
            {
                titre : "Naruto",
                nom : "naruto",
                lien : "app.game({pack: 'naruto', level: '5'})",
                src : "img/naruto.jpg",
                time : 5,
                pts : 40
            }
        );
        $scope.puzzels.push(
            {
                titre : "Dragon Ball Z",
                nom : "dragonballz",
                lien : "app.game({pack: 'dragonballz', level: '5'})",
                src : "img/dragonballz.jpg",
                time : 7,
                pts : 56
            }
        );
        $scope.puzzels.push(
            {
                titre : "Les indestructibles",
                nom : "indestructibles",
                lien : "app.game({pack: 'indestructibles', level: '5'})",
                src : "img/indestructibles.jpg",
                time : 10,
                pts : 30
            }
        );
    }

})

.controller('GameCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);
    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

    $scope.niveau = 1;
    $scope.packImg = $stateParams.pack;
    $scope.nombre = $stateParams.level;
    $scope.lists = [];
    $scope.generique = (new Audio("audio/"+$scope.packImg+".mp3",0.2)).play();
    console.log("La musique",$scope.generique);

    if($scope.nombre==3){
        var list=[];
        list.push( [3,1,5,2,8,7,6,0,4]);list.push( [3,1,5,2,8,7,0,6,4]);list.push( [3,1,5,0,8,7,2,6,4]);list.push( [0,1,5,3,8,7,2,6,4]);list.push( [1,0,5,3,8,7,2,6,4]);list.push( [1,8,5,3,0,7,2,6,4]);list.push( [1,8,5,0,3,7,2,6,4]);list.push( [0,8,5,1,3,7,2,6,4]);list.push( [8,0,5,1,3,7,2,6,4]);list.push( [8,3,5,1,0,7,2,6,4]);list.push( [8,3,5,1,6,7,2,0,4]);list.push( [8,3,5,1,6,7,0,2,4]);list.push( [8,3,5,0,6,7,1,2,4]);list.push( [8,3,5,6,0,7,1,2,4]);list.push( [8,3,5,6,2,7,1,0,4]);list.push( [8,3,5,6,2,7,1,4,0]);list.push( [8,3,5,6,2,0,1,4,7]);list.push( [8,3,5,6,0,2,1,4,7]);list.push( [8,0,5,6,3,2,1,4,7]);list.push( [8,5,0,6,3,2,1,4,7]);list.push( [8,5,2,6,3,0,1,4,7]);list.push( [8,5,2,6,0,3,1,4,7]);list.push( [8,5,2,6,4,3,1,0,7]);list.push( [8,5,2,6,4,3,0,1,7]);list.push( [8,5,2,0,4,3,6,1,7]);list.push( [0,5,2,8,4,3,6,1,7]);list.push( [5,0,2,8,4,3,6,1,7]);list.push( [5,4,2,8,0,3,6,1,7]);list.push( [5,4,2,0,8,3,6,1,7]);list.push( [5,4,2,6,8,3,0,1,7]);list.push( [5,4,2,6,8,3,1,0,7]);list.push( [5,4,2,6,0,3,1,8,7]);list.push( [5,4,2,6,3,0,1,8,7]);list.push( [5,4,2,6,3,7,1,8,0]);list.push( [5,4,2,6,3,7,1,0,8]);list.push( [5,4,2,6,0,7,1,3,8]);list.push( [5,4,2,6,7,0,1,3,8]);list.push( [5,4,0,6,7,2,1,3,8]);list.push( [5,0,4,6,7,2,1,3,8]);list.push( [5,7,4,6,0,2,1,3,8]);list.push( [5,7,4,0,6,2,1,3,8]);list.push( [0,7,4,5,6,2,1,3,8]);list.push( [7,0,4,5,6,2,1,3,8]);list.push( [7,6,4,5,0,2,1,3,8]);list.push( [7,6,4,5,2,0,1,3,8]);list.push( [7,6,4,5,2,8,1,3,0]);list.push( [7,6,4,5,2,8,1,0,3]);list.push( [7,6,4,5,2,8,0,1,3]);list.push( [7,6,4,0,2,8,5,1,3]);list.push( [0,6,4,7,2,8,5,1,3]);list.push( [6,0,4,7,2,8,5,1,3]);list.push( [6,4,0,7,2,8,5,1,3]);
        var taille = list.length;
        var randomnumber = Math.floor(Math.random() * (taille));
        $scope.lists = list[randomnumber];
    }else if($scope.nombre==4){
        var list=[];
        list.push( [1,5,2,3,4,6,10,7,8,13,9,11,12,14,15,0]);list.push( [1,5,2,3,4,6,10,7,8,13,9,0,12,14,15,11]);list.push( [1,5,2,3,4,6,10,7,8,13,0,9,12,14,15,11]);list.push( [1,5,2,3,4,6,0,7,8,13,10,9,12,14,15,11]);list.push( [1,5,2,3,4,0,6,7,8,13,10,9,12,14,15,11]);list.push( [1,5,2,3,4,13,6,7,8,0,10,9,12,14,15,11]);list.push( [1,5,2,3,4,13,6,7,0,8,10,9,12,14,15,11]);list.push( [1,5,2,3,0,13,6,7,4,8,10,9,12,14,15,11]);list.push( [1,5,2,3,13,0,6,7,4,8,10,9,12,14,15,11]);list.push( [1,0,2,3,13,5,6,7,4,8,10,9,12,14,15,11]);list.push( [0,1,2,3,13,5,6,7,4,8,10,9,12,14,15,11]);list.push( [13,1,2,3,0,5,6,7,4,8,10,9,12,14,15,11]);list.push( [13,1,2,3,5,0,6,7,4,8,10,9,12,14,15,11]);list.push( [13,1,2,3,5,8,6,7,4,0,10,9,12,14,15,11]);list.push( [13,1,2,3,5,8,6,7,4,14,10,9,12,0,15,11]);list.push( [13,1,2,3,5,8,6,7,4,14,10,9,12,15,0,11]);list.push( [13,1,2,3,5,8,6,7,4,14,0,9,12,15,10,11]);list.push( [13,1,2,3,5,8,6,7,4,0,14,9,12,15,10,11]);list.push( [13,1,2,3,5,0,6,7,4,8,14,9,12,15,10,11]);list.push( [13,0,2,3,5,1,6,7,4,8,14,9,12,15,10,11]);list.push( [13,2,0,3,5,1,6,7,4,8,14,9,12,15,10,11]);list.push( [13,2,6,3,5,1,0,7,4,8,14,9,12,15,10,11]);list.push( [13,2,6,3,5,1,14,7,4,8,0,9,12,15,10,11]);list.push( [13,2,6,3,5,1,14,7,4,0,8,9,12,15,10,11]);list.push( [13,2,6,3,5,0,14,7,4,1,8,9,12,15,10,11]);list.push( [13,2,6,3,0,5,14,7,4,1,8,9,12,15,10,11]);list.push( [13,2,6,3,4,5,14,7,0,1,8,9,12,15,10,11]);list.push( [13,2,6,3,4,5,14,7,12,1,8,9,0,15,10,11]);list.push( [13,2,6,3,4,5,14,7,12,1,8,9,15,0,10,11]);list.push( [13,2,6,3,4,5,14,7,12,1,8,9,15,10,0,11]);list.push( [13,2,6,3,4,5,14,7,12,1,0,9,15,10,8,11]);list.push( [13,2,6,3,4,5,14,7,12,0,1,9,15,10,8,11]);list.push( [13,2,6,3,4,0,14,7,12,5,1,9,15,10,8,11]);list.push( [13,2,6,3,4,14,0,7,12,5,1,9,15,10,8,11]);list.push( [13,2,6,3,4,14,7,0,12,5,1,9,15,10,8,11]);list.push( [13,2,6,3,4,14,7,9,12,5,1,0,15,10,8,11]);list.push( [13,2,6,3,4,14,7,9,12,5,1,11,15,10,8,0]);list.push( [13,2,6,3,4,14,7,9,12,5,1,11,15,10,0,8]);list.push( [13,2,6,3,4,14,7,9,12,5,0,11,15,10,1,8]);list.push( [13,2,6,3,4,14,0,9,12,5,7,11,15,10,1,8]);list.push( [13,2,6,3,4,14,9,0,12,5,7,11,15,10,1,8]);list.push( [13,2,6,3,4,14,9,11,12,5,7,0,15,10,1,8]);list.push( [13,2,6,3,4,14,9,11,12,5,0,7,15,10,1,8]);list.push( [13,2,6,3,4,14,0,11,12,5,9,7,15,10,1,8]);list.push( [13,2,0,3,4,14,6,11,12,5,9,7,15,10,1,8]);list.push( [13,0,2,3,4,14,6,11,12,5,9,7,15,10,1,8]);list.push( [13,14,2,3,4,0,6,11,12,5,9,7,15,10,1,8]);list.push( [13,14,2,3,0,4,6,11,12,5,9,7,15,10,1,8]);list.push( [13,14,2,3,12,4,6,11,0,5,9,7,15,10,1,8]);list.push( [13,14,2,3,12,4,6,11,5,0,9,7,15,10,1,8]);list.push( [13,14,2,3,12,0,6,11,5,4,9,7,15,10,1,8]);list.push( [13,0,2,3,12,14,6,11,5,4,9,7,15,10,1,8]);list.push( [0,13,2,3,12,14,6,11,5,4,9,7,15,10,1,8]);list.push( [12,13,2,3,0,14,6,11,5,4,9,7,15,10,1,8]);list.push( [12,13,2,3,14,0,6,11,5,4,9,7,15,10,1,8]);list.push( [12,13,2,3,14,6,0,11,5,4,9,7,15,10,1,8]);list.push( [12,13,2,3,14,6,9,11,5,4,0,7,15,10,1,8]);list.push( [12,13,2,3,14,6,9,11,5,0,4,7,15,10,1,8]);list.push( [12,13,2,3,14,6,9,11,5,10,4,7,15,0,1,8]);list.push( [12,13,2,3,14,6,9,11,5,10,4,7,15,1,0,8]);list.push( [12,13,2,3,14,6,9,11,5,10,0,7,15,1,4,8]);list.push( [12,13,2,3,14,6,9,11,5,10,7,0,15,1,4,8]);list.push( [12,13,2,3,14,6,9,0,5,10,7,11,15,1,4,8]);list.push( [12,13,2,0,14,6,9,3,5,10,7,11,15,1,4,8]);list.push( [12,13,0,2,14,6,9,3,5,10,7,11,15,1,4,8]);list.push( [12,13,9,2,14,6,0,3,5,10,7,11,15,1,4,8]);list.push( [12,13,9,2,14,0,6,3,5,10,7,11,15,1,4,8]);list.push( [12,13,9,2,14,10,6,3,5,0,7,11,15,1,4,8]);list.push( [12,13,9,2,14,10,6,3,0,5,7,11,15,1,4,8]);list.push( [12,13,9,2,0,10,6,3,14,5,7,11,15,1,4,8]);list.push( [0,13,9,2,12,10,6,3,14,5,7,11,15,1,4,8]);
        var taille = list.length;
        var randomnumber = Math.floor(Math.random() * (taille));
        $scope.lists = list[randomnumber];
    }else if($scope.nombre==5){
        var list=[];
        list.push( [1,2,7,3,4,5,6,13,12,9,10,11,0,8,14,15,16,17,18,19,20,21,22,23,24]);list.push( [1,2,7,3,4,5,6,13,12,9,10,0,11,8,14,15,16,17,18,19,20,21,22,23,24]);list.push( [1,2,7,3,4,5,0,13,12,9,10,6,11,8,14,15,16,17,18,19,20,21,22,23,24]);list.push( [1,2,7,3,4,0,5,13,12,9,10,6,11,8,14,15,16,17,18,19,20,21,22,23,24]);list.push( [1,2,7,3,4,10,5,13,12,9,0,6,11,8,14,15,16,17,18,19,20,21,22,23,24]);list.push( [1,2,7,3,4,10,5,13,12,9,15,6,11,8,14,0,16,17,18,19,20,21,22,23,24]);list.push( [1,2,7,3,4,10,5,13,12,9,15,6,11,8,14,16,0,17,18,19,20,21,22,23,24]);list.push( [1,2,7,3,4,10,5,13,12,9,15,0,11,8,14,16,6,17,18,19,20,21,22,23,24]);list.push( [1,2,7,3,4,10,5,13,12,9,15,11,0,8,14,16,6,17,18,19,20,21,22,23,24]);list.push( [1,2,7,3,4,10,5,13,12,9,15,11,17,8,14,16,6,0,18,19,20,21,22,23,24]);list.push( [1,2,7,3,4,10,5,13,12,9,15,11,17,8,14,16,6,22,18,19,20,21,0,23,24]);list.push( [1,2,7,3,4,10,5,13,12,9,15,11,17,8,14,16,6,22,18,19,20,21,23,0,24]);list.push( [1,2,7,3,4,10,5,13,12,9,15,11,17,8,14,16,6,22,0,19,20,21,23,18,24]);list.push( [1,2,7,3,4,10,5,13,12,9,15,11,17,8,14,16,6,0,22,19,20,21,23,18,24]);list.push( [1,2,7,3,4,10,5,13,12,9,15,11,0,8,14,16,6,17,22,19,20,21,23,18,24]);list.push( [1,2,7,3,4,10,5,13,12,9,15,11,8,0,14,16,6,17,22,19,20,21,23,18,24]);list.push( [1,2,7,3,4,10,5,13,12,9,15,11,8,14,0,16,6,17,22,19,20,21,23,18,24]);list.push( [1,2,7,3,4,10,5,13,12,9,15,11,8,14,19,16,6,17,22,0,20,21,23,18,24]);list.push( [1,2,7,3,4,10,5,13,12,9,15,11,8,14,19,16,6,17,0,22,20,21,23,18,24]);list.push( [1,2,7,3,4,10,5,13,12,9,15,11,8,0,19,16,6,17,14,22,20,21,23,18,24]);list.push( [1,2,7,3,4,10,5,13,0,9,15,11,8,12,19,16,6,17,14,22,20,21,23,18,24]);list.push( [1,2,7,3,4,10,5,13,9,0,15,11,8,12,19,16,6,17,14,22,20,21,23,18,24]);list.push( [1,2,7,3,0,10,5,13,9,4,15,11,8,12,19,16,6,17,14,22,20,21,23,18,24]);list.push( [1,2,7,0,3,10,5,13,9,4,15,11,8,12,19,16,6,17,14,22,20,21,23,18,24]);list.push( [1,2,0,7,3,10,5,13,9,4,15,11,8,12,19,16,6,17,14,22,20,21,23,18,24]);list.push( [1,2,13,7,3,10,5,0,9,4,15,11,8,12,19,16,6,17,14,22,20,21,23,18,24]);list.push( [1,2,13,7,3,10,5,8,9,4,15,11,0,12,19,16,6,17,14,22,20,21,23,18,24]);list.push( [1,2,13,7,3,10,5,8,9,4,15,11,12,0,19,16,6,17,14,22,20,21,23,18,24]);list.push( [1,2,13,7,3,10,5,8,0,4,15,11,12,9,19,16,6,17,14,22,20,21,23,18,24]);list.push( [1,2,13,7,3,10,5,0,8,4,15,11,12,9,19,16,6,17,14,22,20,21,23,18,24]);list.push( [1,2,13,7,3,10,0,5,8,4,15,11,12,9,19,16,6,17,14,22,20,21,23,18,24]);list.push( [1,2,13,7,3,0,10,5,8,4,15,11,12,9,19,16,6,17,14,22,20,21,23,18,24]);list.push( [1,2,13,7,3,15,10,5,8,4,0,11,12,9,19,16,6,17,14,22,20,21,23,18,24]);list.push( [1,2,13,7,3,15,10,5,8,4,16,11,12,9,19,0,6,17,14,22,20,21,23,18,24]);list.push( [1,2,13,7,3,15,10,5,8,4,16,11,12,9,19,20,6,17,14,22,0,21,23,18,24]);list.push( [1,2,13,7,3,15,10,5,8,4,16,11,12,9,19,20,6,17,14,22,21,0,23,18,24]);list.push( [1,2,13,7,3,15,10,5,8,4,16,11,12,9,19,20,0,17,14,22,21,6,23,18,24]);list.push( [1,2,13,7,3,15,10,5,8,4,16,0,12,9,19,20,11,17,14,22,21,6,23,18,24]);list.push( [1,2,13,7,3,15,10,5,8,4,16,12,0,9,19,20,11,17,14,22,21,6,23,18,24]);list.push( [1,2,13,7,3,15,10,5,8,4,16,12,17,9,19,20,11,0,14,22,21,6,23,18,24]);list.push( [1,2,13,7,3,15,10,5,8,4,16,12,17,9,19,20,11,14,0,22,21,6,23,18,24]);list.push( [1,2,13,7,3,15,10,5,8,4,16,12,17,0,19,20,11,14,9,22,21,6,23,18,24]);list.push( [1,2,13,7,3,15,10,5,0,4,16,12,17,8,19,20,11,14,9,22,21,6,23,18,24]);list.push( [1,2,13,0,3,15,10,5,7,4,16,12,17,8,19,20,11,14,9,22,21,6,23,18,24]);list.push( [1,2,0,13,3,15,10,5,7,4,16,12,17,8,19,20,11,14,9,22,21,6,23,18,24]);list.push( [1,0,2,13,3,15,10,5,7,4,16,12,17,8,19,20,11,14,9,22,21,6,23,18,24]);list.push( [0,1,2,13,3,15,10,5,7,4,16,12,17,8,19,20,11,14,9,22,21,6,23,18,24]);list.push( [15,1,2,13,3,0,10,5,7,4,16,12,17,8,19,20,11,14,9,22,21,6,23,18,24]);list.push( [15,1,2,13,3,10,0,5,7,4,16,12,17,8,19,20,11,14,9,22,21,6,23,18,24]);list.push( [15,1,2,13,3,10,12,5,7,4,16,0,17,8,19,20,11,14,9,22,21,6,23,18,24]);list.push( [15,1,2,13,3,10,12,5,7,4,16,11,17,8,19,20,0,14,9,22,21,6,23,18,24]);list.push( [15,1,2,13,3,10,12,5,7,4,16,11,17,8,19,0,20,14,9,22,21,6,23,18,24]);list.push( [15,1,2,13,3,10,12,5,7,4,16,11,17,8,19,21,20,14,9,22,0,6,23,18,24]);list.push( [15,1,2,13,3,10,12,5,7,4,16,11,17,8,19,21,20,14,9,22,6,0,23,18,24]);list.push( [15,1,2,13,3,10,12,5,7,4,16,11,17,8,19,21,0,14,9,22,6,20,23,18,24]);list.push( [15,1,2,13,3,10,12,5,7,4,16,0,17,8,19,21,11,14,9,22,6,20,23,18,24]);list.push( [15,1,2,13,3,10,12,5,7,4,0,16,17,8,19,21,11,14,9,22,6,20,23,18,24]);list.push( [15,1,2,13,3,10,12,5,7,4,21,16,17,8,19,0,11,14,9,22,6,20,23,18,24]);list.push( [15,1,2,13,3,10,12,5,7,4,21,16,17,8,19,11,0,14,9,22,6,20,23,18,24]);list.push( [15,1,2,13,3,10,12,5,7,4,21,16,17,8,19,11,14,0,9,22,6,20,23,18,24]);list.push( [15,1,2,13,3,10,12,5,7,4,21,16,0,8,19,11,14,17,9,22,6,20,23,18,24]);list.push( [15,1,2,13,3,10,12,5,7,4,21,16,8,0,19,11,14,17,9,22,6,20,23,18,24]);list.push( [15,1,2,13,3,10,12,5,0,4,21,16,8,7,19,11,14,17,9,22,6,20,23,18,24]);list.push( [15,1,2,13,3,10,12,0,5,4,21,16,8,7,19,11,14,17,9,22,6,20,23,18,24]);list.push( [15,1,2,13,3,10,12,8,5,4,21,16,0,7,19,11,14,17,9,22,6,20,23,18,24]);list.push( [15,1,2,13,3,10,12,8,5,4,21,16,7,0,19,11,14,17,9,22,6,20,23,18,24]);list.push( [15,1,2,13,3,10,12,8,5,4,21,16,7,19,0,11,14,17,9,22,6,20,23,18,24]);list.push( [15,1,2,13,3,10,12,8,5,0,21,16,7,19,4,11,14,17,9,22,6,20,23,18,24]);list.push( [15,1,2,13,3,10,12,8,0,5,21,16,7,19,4,11,14,17,9,22,6,20,23,18,24]);list.push( [15,1,2,0,3,10,12,8,13,5,21,16,7,19,4,11,14,17,9,22,6,20,23,18,24]);list.push( [15,1,2,3,0,10,12,8,13,5,21,16,7,19,4,11,14,17,9,22,6,20,23,18,24]);list.push( [15,1,2,3,5,10,12,8,13,0,21,16,7,19,4,11,14,17,9,22,6,20,23,18,24]);list.push( [15,1,2,3,5,10,12,8,13,4,21,16,7,19,0,11,14,17,9,22,6,20,23,18,24]);list.push( [15,1,2,3,5,10,12,8,13,4,21,16,7,19,22,11,14,17,9,0,6,20,23,18,24]);list.push( [15,1,2,3,5,10,12,8,13,4,21,16,7,19,22,11,14,17,0,9,6,20,23,18,24]);list.push( [15,1,2,3,5,10,12,8,13,4,21,16,7,19,22,11,14,17,18,9,6,20,23,0,24]);list.push( [15,1,2,3,5,10,12,8,13,4,21,16,7,19,22,11,14,17,18,9,6,20,23,24,0]);list.push( [15,1,2,3,5,10,12,8,13,4,21,16,7,19,22,11,14,17,18,0,6,20,23,24,9]);list.push( [15,1,2,3,5,10,12,8,13,4,21,16,7,19,22,11,14,17,0,18,6,20,23,24,9]);list.push( [15,1,2,3,5,10,12,8,13,4,21,16,7,19,22,11,14,0,17,18,6,20,23,24,9]);list.push( [15,1,2,3,5,10,12,8,13,4,21,16,0,19,22,11,14,7,17,18,6,20,23,24,9]);list.push( [15,1,2,3,5,10,12,0,13,4,21,16,8,19,22,11,14,7,17,18,6,20,23,24,9]);list.push( [15,1,2,3,5,10,12,13,0,4,21,16,8,19,22,11,14,7,17,18,6,20,23,24,9]);list.push( [15,1,2,3,5,10,12,13,19,4,21,16,8,0,22,11,14,7,17,18,6,20,23,24,9]);
        var taille = list.length;
        var randomnumber = Math.floor(Math.random() * (taille));
        $scope.lists = list[randomnumber];
    }
})
.factory('Application', function ($cordovaNativeStorage,$state) {
    return {
      registerName : function(name,){
        $cordovaNativeStorage.setItem("name", name).then(function () {
            console.log("YOUUUPIIII login");
        }, function(error){
             console.log("ERRRRUUUURRRRRRR login");
             console.log(error);  
        });
        
      },

      getName : function () {
        return $cordovaNativeStorage.getItem("name").then(function (value) {
            console.log("name",value);
            return value;
        }, function(error){
             console.log("ERRRRUUUUR Recup Nom");
             console.log(error);  
        });
      },

      
    };
})
;
