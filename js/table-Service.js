// table bảng giá
solarBT.controller('table', function ($scope) {
    $scope.price = [
        {
            congsuat: ' Hybrid 3kWp	',
            dientich: '20m2	',
            dientaora: '12 – 15 ký điện'
        },
        {
            congsuat: ' Hybrid 5kWp	',
            dientich: '30m2	',
            dientaora: '18 – 25 ký điện'
        },
        {
            congsuat: ' Hybrid 6kWp	',
            dientich: '36m2	',
            dientaora: '22 – 30 ký điện'
        },
        {
            congsuat: ' Hybrid 8kWp	',
            dientich: '40m2	',
            dientaora: '32 – 40 ký điện'
        },
        {
            congsuat: ' Hybrid 10kWp	',
            dientich: '60m2	',
            dientaora: '36 – 50 ký điện'
        },
        {
            congsuat: ' Hybrid 12kWp	',
            dientich: '70m2	',
            dientaora: '50 – 60 ký điện'
        },
        {
            congsuat: ' Hybrid 16kWp	',
            dientich: '90m2	',
            dientaora: '65 – 80 ký điện'
        },
        {
            congsuat: ' Hybrid 20kWp	',
            dientich: '120m2	',
            dientaora: '72 – 100 ký điện'
        }
    ];

    $scope.capacity = [
        {
            congsuat: ' Hybrid 3kWp	',
            dientaora: '300 – 450 ký điện',
            chiphi: '90 – 110 triệu'
        },
        {
            congsuat: ' Hybrid 5kWp	',
            dientaora: '500 – 700 ký điện',
            chiphi: '110 – 135 triệu'
        },
        {
            congsuat: ' Hybrid 6kWp	',
            dientaora: '600 – 780 ký điện',
            chiphi: '120 – 145 triệu'
        }, {
            congsuat: ' Hybrid 8kWp	',
            dientaora: '750 – 1000 ký điện',
            chiphi: '150 – 210 triệu'
        },
        {
            congsuat: ' Hybrid 10kWp	',
            dientaora: '900 – 1100 ký điện',
            chiphi: '200 – 260 triệu'
        },
        {
            congsuat: ' Hybrid 12kWp	',
            dientaora: '1500 – 1800 ký điện',
            chiphi: '260 – 320 triệu'
        },
        {
            congsuat: ' Hybrid 16kWp	',
            dientaora: '2000 – 2400 ký điện',
            chiphi: '340 – 380 triệu'
        }
    ];

    $scope.vattu = [
        {
            thanhphan: 'Tấm pin năng lượng mặt trời	',
            thuonghieu: 'CANADIAN, LONGI',
            chiphi: '35%'
        },
        {
            thanhphan: 'Inverter hybrid',
            thuonghieu: 'DEYE, LUXPOWER',
            chiphi: '20%'
        },
        {
            thanhphan: 'Pin – Ắc quy lưu trữ',
            thuonghieu: 'UFO, GIGABOX, EVE, OLITER',
            chiphi: '27%'
        }, {
            thanhphan: 'Tủ điện và phụ kiện',
            thuonghieu: 'Solar Bách Thịnh',
            chiphi: '5%'
        },
        {
            thanhphan: 'Khung giàn đỡ pin',
            thuonghieu: 'Solar Bách Thịnh',
            chiphi: '8%'
        },
        {
            thanhphan: 'Thi công và lắp đặt',
            thuonghieu: 'Solar Bách Thịnh',
            chiphi: '5%'
        },
        {
            thanhphan: 'Khảo sát, thiết kế',
            thuonghieu: 'Solar Bách Thịnh',
            chiphi: 'Free'
        },
        {
            thanhphan: 'Bảo hành, hậu mãi',
            thuonghieu: 'Solar Bách Thịnh',
            chiphi: 'Free'
        }
    ];
});
