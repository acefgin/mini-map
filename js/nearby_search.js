$(function() {
    function initMap() {
        var position = {lat: 47.6204, lng: -122.3491};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: {
                lat: 47.6204,
                lng: -122.3491
            }
        });
    }


    initMap();
});
