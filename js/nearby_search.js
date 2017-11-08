$(function() {
    var DEFAULT_ZOOM = 15;
    function initMap() {
        var position = {lat: 47.620491, lng: -122.349279};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: DEFAULT_ZOOM,
            center: position
        });

        var marker = new google.maps.Marker({
            position: position,
            map: map
        });
    }

    initMap();
});
