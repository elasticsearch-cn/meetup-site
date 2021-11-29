/**
 * 百度地图：Elastic Meetup 线下活动城市分布图
 */
var geoCoordMap = {
    "北京":[116.46,39.92],
    "上海":[121.48,31.22],
    "广州":[113.23,23.16],
    "深圳":[114.07,22.62],
    "杭州":[120.19,30.26],
    "武汉":[114.31,30.52],
    "南京":[118.22,31.14],
    "长沙":[113,28.21],
    "成都":[104.07,30.67],
    "重庆":[106.55,29.55],
    "台湾":[121.97,24.08]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                symbol:data[i].symbol,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

option = {

    title: {
        text: 'Elastic Meetup 线下活动城市分布图',
        subtext: '',
        sublink: '',
        x:'center',
        textStyle: {
            color: '#000000'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + '' + params.value[2];
        }
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['pm2.5'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        itemstyle: {
            normal: {

                borderColor: '#111'
            },
            emphasis: {
                areaColor: 'yellow'
            }
        }
    },
    series: [
        {
            name: '活动分布图',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
                {name: "北京",symbol:'pin',value: ""},
                {name: "上海",symbol:'pin',value: ""},
                {name: "广州",symbol:'pin',value: ""},
                {name: "深圳",symbol:'pin',value: ""},
                {name: "杭州",symbol:'pin',value: ""},
                {name: "武汉",symbol:'pin',value: ""},
                {name: "南京",symbol:'pin',value: ""},
                {name: "长沙",symbol:'pin',value: ""},
                {name: "成都",symbol:'pin',value: ""},
                {name: "重庆",symbol:'pin',value: ""},
                {name: "台湾",symbol:'pin',value: ""},
            ]),
            roam: true,
            symbolSize: 50,
            label: {
                normal: {
                    show: true,
                    formatter: '{b}'
                },
                emphasis: {
                    show: false
                }
            },
            itemsstyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ]
}

$.get('/static/plugins/echarts/map/china.json', function (chinaJson) {
    echarts.registerMap('china', chinaJson);
    var chart = echarts.init(document.getElementById('city-map'));
    chart.setOption(option);
});