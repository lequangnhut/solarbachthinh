// backtop
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#backtop').fadeIn();
        } else {
            $('#backtop').fadeOut();
        }
    });
    $("#backtop").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
    });
});


let solarBT = angular.module('solar', ['ngRoute']);


solarBT.controller('pin', function pin($scope, $http) {
    $http.get('./db/pin.js').then(function (response) {
        $scope.pin = response.data;
    });
});

solarBT.controller('inverter', function inverter($scope, $http) {
    $http.get('./db/inverter.js').then(function (response) {
        $scope.inverter = response.data;
    });
});

solarBT.controller('phukien', function phukien($scope, $http) {
    $http.get('./db/phukien.js').then(function (response) {
        $scope.phukien = response.data;
    });
});

solarBT.controller('light', function light($scope, $http) {
    $http.get('./db/light.js').then(function (response) {
        $scope.light = response.data;
    });
});

solarBT.controller('page-invt', function light($scope, $http) {
    $http.get('./db/invt.js').then(function (response) {
        $scope.invt = response.data;
    });
});

solarBT.controller('page-solis', function light($scope, $http) {
    $http.get('./db/solis.js').then(function (response) {
        $scope.solis = response.data;
    });
});

solarBT.controller('page-goodwee', function light($scope, $http) {
    $http.get('./db/goowee.js').then(function (response) {
        $scope.goowee = response.data;
    });
});

solarBT.controller('page-goowat', function light($scope, $http) {
    $http.get('./db/goowat.js').then(function (response) {
        $scope.goowat = response.data;
    });
});


solarBT.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/inverter/inverter.html',
            controller: 'inverter'
        })
        .when('/pin', {
            templateUrl: 'views/pin/pin.html',
            controller: 'pin'
        })
        .when('/phu-kien', {
            templateUrl: 'views/phukien/phukien.html',
            controller: 'phukien'
        })
        .when('/light', {
            templateUrl: 'views/light/light.html',
            controller: 'light'
        })
        .when('/product-ivt/:id', {
            templateUrl: 'views/inverter/product.html',
            controller: 'productInvt'
        })
        .when('/product-pin/:id', {
            templateUrl: 'views/pin/product.html',
            controller: 'productPin'
        })
        .when('/product-pk/:id', {
            templateUrl: 'views/phukien/product.html',
            controller: 'productPhukien'
        })
        .when('/product-light/:id', {
            templateUrl: 'views/light/product.html',
            controller: 'productLight'
        })
        .when('/page-invt', {
            templateUrl: 'views/inverter/invt.html',
            controller: 'page-invt'
        })
        .when('/page-solis', {
            templateUrl: 'views/inverter/solis.html',
            controller: 'page-solis'
        })
        .when('/page-goodwee', {
            templateUrl: 'views/inverter/goodwee.html',
            controller: 'page-goodwee'
        })
        .when('/page-goowat', {
            templateUrl: 'views/inverter/goowat.html',
            controller: 'page-goowat'
        })
        // auth
        .when('/data-invt', {
            templateUrl: 'views/auth/dataInverter.html',
            controller: 'inverter'
        })
        .when('/data-pin', {
            templateUrl: 'views/auth/dataPin.html',
            controller: 'pin'
        })
        .when('/data-phukien', {
            templateUrl: 'views/auth/dataPhukien.html',
            controller: 'phukien'
        })
        .when('/data-light', {
            templateUrl: 'views/auth/dataLight.html',
            controller: 'light'
        })
        // add ivt
        .when('/add-invt', {
            templateUrl: 'views/auth/form/add/addIvt.html',
            controller: "addInvt"
        })
        .otherwise('/', {
            redirectTo: 'views/inverter/inverter.html'
        })
});