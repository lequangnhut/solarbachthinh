solarBT.controller('slick', function controlIndex($scope, $http, $timeout) {

    $http.get('./db/inverter.js').then(function (response) {

        destroyCarousel();

        $scope.inverter = response.data;

        $timeout(function () {
            slickCarousel();
        });

    });

    $http.get('./db/pin.js').then(function (response) {

        destroyCarousel();

        $scope.pin = response.data;

        $timeout(function () {
            slickCarousel();
        });

    });

    $http.get('./db/phukien.js').then(function (response) {

        destroyCarousel();

        $scope.phukien = response.data;

        $timeout(function () {
            slickCarousel();
        });

    });

    $http.get('./db/project.js').then(function (response) {

        destroyCarousel();

        $scope.project = response.data;

        $timeout(function () {
            slickCarousel();
        });

    });

    $http.get('./db/light.js').then(function (response) {

        destroyCarousel();

        $scope.light = response.data;

        $timeout(function () {
            slickCarousel();
        });

    });

});

function slickCarousel() {
    $('.skills_section').slick({
        infinite: true,
        autoplay: true,
        speed: 400,
        draggable: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ],

        prevArrow: "<button type='button' class='slick-prev'><i class='fa-solid fa-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next'><i class='fa-solid fa-chevron-right'></i></button>"
    });
}

function destroyCarousel() {
    if ($('.skills_section').hasClass('slick-initialized')) {
        $('.skills_section').slick('destroy');
    }
}

// hàm đếm số tăng dần
solarBT.controller('numberCount', function ($scope) {

    $('.number-inc').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-max');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
            {
                duration: 5000,
                easing: 'linear',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                }
            });
    });

});


// slick đối tác
$('.doi-tac-solar').slick({
    
    infinite: true,
    autoplay: true,
    speed: 400,
    draggable: false,
    autoplaySpeed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ],

    prevArrow: "<button type='button' class='btn-prev d-none'><i class='fa-solid fa-chevron-left'></i></button>",
    nextArrow: "<button type='button' class='btn-next d-none'><i class='fa-solid fa-chevron-right'></i></button>"
});