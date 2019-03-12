/**
 * 百度地图 设置定位
 */
var map = new BMap.Map("mapContainer");
var geoc = new BMap.Geocoder();

//获取地址
var mapAddressCity = document.getElementsByClassName("map-address-city")[0].innerText;
var mapAddressDes = document.getElementsByClassName("map-address-des")[0].innerText;
geoc.getPoint(mapAddressDes, function (point) {
    if (point) {
        map.clearOverlays();
        var marker = new BMap.Marker(point);
        map.centerAndZoom(point, 18);
        map.addOverlay(marker);
        map.enableScrollWheelZoom(true);
        marker.setAnimation(BMap.BMAP_ANIMATION_BOUNCE);
    }
}, mapAddressCity);