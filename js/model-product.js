solarBT.controller('productInvt', function ($scope, $http, $routeParams) {

    $http.get('./db/inverter.js').then(function (response) {
        $scope.ivt = response.data[$routeParams.id];

        $scope.img = $scope.ivt.Logo;
        $scope.name = $scope.ivt.Name;
        $scope.des = $scope.ivt.Des;
        $scope.congsuat = $scope.ivt.Congxuat;
        $scope.hang = $scope.ivt.Hang;
        $scope.chatluong = $scope.ivt.chatluong;
        $scope.dienapra = $scope.ivt.dienapra;
    });

    var modal = document.getElementById("myModal");

    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }

});

solarBT.controller('productPin', function ($scope, $http, $routeParams) {

    $http.get('./db/pin.js').then(function (response) {
        $scope.pin = response.data[$routeParams.id];
        console.log($scope.pin);

        $scope.img = $scope.pin.Logo;
        $scope.name = $scope.pin.Name;
        $scope.des = $scope.pin.Des;
        $scope.congsuat = $scope.pin.Congxuat;
        $scope.hang = $scope.pin.Hang;

        $scope.tebaoquandien = $scope.pin.Loaitebaoquandien;
        $scope.cellpin = $scope.pin.Soluongcell;
        $scope.kichthuoc = $scope.pin.Kichthuoc;
        $scope.cannang = $scope.pin.Cannang;
        $scope.kinh = $scope.pin.Kinh;
        $scope.khung = $scope.pin.Khung;
        $scope.hopdauday = $scope.pin.Hopdauday;
        $scope.capdien = $scope.pin.Capdien;
        $scope.jack = $scope.pin.Jack;
        $scope.quycachdonggoi = $scope.pin.Quycachdonggoi;
    });

    var modal = document.getElementById("myModal");

    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }

});

solarBT.controller('productPhukien', function ($scope, $http, $routeParams) {

    $http.get('./db/phukien.js').then(function (response) {
        $scope.phukien = response.data[$routeParams.id];

        $scope.img = $scope.phukien.Logo;
        $scope.name = $scope.phukien.Name;
        $scope.des = $scope.phukien.Des;
        $scope.congsuat = $scope.phukien.Congxuat;
        $scope.hang = $scope.phukien.Hang;
        $scope.chatluong = $scope.phukien.chatluong;
        $scope.dienapra = $scope.phukien.dienapra;
    });

    var modal = document.getElementById("myModal");

    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }

});

solarBT.controller('productLight', function ($scope, $http, $routeParams) {

    $http.get('./db/light.js').then(function (response) {
        $scope.light = response.data[$routeParams.id];

        $scope.img = $scope.light.Logo;
        $scope.name = $scope.light.Name;
        $scope.des = $scope.light.Des;
        $scope.congsuat = $scope.light.Congsuat;
        $scope.hang = $scope.light.Hang;
        $scope.chatluong = $scope.light.chatluong;
        $scope.dienapra = $scope.light.dienapra;
    });

    var modal = document.getElementById("myModal");

    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }

});