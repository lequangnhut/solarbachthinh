solarBT.controller('login', function ($scope, $http) {

    $scope.show = function () {
        $scope.inProgess = true;
    };

    $scope.hide = function () {
        $scope.inProgess = false;
    };

    $scope.login = function () {

        $http.get('./db/auth/auth.js').then(function (response) {
            $scope.auth = response.data;

            for (let i = 0; i < $scope.auth.length; i++) {
                console.log($scope.auth[i].user);
                if ($scope.auth[i].user == $scope.user && $scope.auth[i].pass == $scope.pass) {
                    alert('Đăng nhập thành công');
                    $scope.show();
                    return;
                }
            }
            alert('Sai thông tin đăng nhập');
        });

    };

    $scope.hide();

});

solarBT.controller('addInvt', function ($scope, $http) {

    $scope.add = function () {
        $http.post('./db/inverter.js', $scope.ivt).then(function (response) {
            // $scope.data = response.data;
            alert('thêm dữ liệu thành công')
            return response.data;
        });
    }

});