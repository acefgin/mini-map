const path = require('path')
const express = require('express')
var request = require('request')
const app = express()
const PORT = 8080

var GOOGLE_KEY = 'AIzaSyBT4qUFTmu7ocLrzO83DK4eCpMMWxXtay4';
var places_url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

app.get('/', function(req, res) {
     res.send('Hello World!');
});

app.get('/nearbysearch', function(req, res) {
     res.sendFile(path.join(__dirname + '/templates/nearby_search.html'));
 });
 
app.get('/places-info', function(req, api_res) {
    var radius = req.query.radius ? req.query.radius : 150;
    var params = {
        'key' : GOOGLE_KEY,
        'location' : req.query.lat + ',' + req.query.lng,
        'radius' : radius,
        'type' : req.query.type
    };
    request({url: places_url, qs: params}, function(err, res, body) {
        console.log(res);
        if (res.statusCode == 200) {
            console.log(body)
            api_res.json(body)
        }
    });

});

app.use('/css', express.static('css'))
app.use('/js', express.static('js'))
app.use('/assets', express.static('assets'))

app.listen(PORT, function() {
    console.log('app started on port ' + PORT + '!');
});
