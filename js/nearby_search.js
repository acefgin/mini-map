$(function() {
    var DEFAULT_ZOOM = 15;
    var GOOGLE_API_KEY = 'AIzaSyBT4qUFTmu7ocLrzO83DK4eCpMMWxXtay4';

    function initMap() {
        var position = {
            lat: 47.620491, 
            lng: -122.349279
        };

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: DEFAULT_ZOOM,
            center: position
        });

        var marker = new google.maps.Marker({
            position: position,
            map: map
        });

        $.ajax({
            url: '/places-info',
            data: {
                'type': 'restaurant',
                'lat': position.lat,
                'lng': position.lng,
                'radius': 500
            },
            success: function(data) {
                debugger;
            },
            failure: function(err) {
                debugger;
            }
        });

    }

    initMap();
});
