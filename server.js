const path = require('path')
const express = require('express')
const app = express()
const PORT = 8080

app.get('/', function(req, res) {
     res.send('Hello World!');
});

app.get('/nearbysearch', function(req, res) {
     res.sendFile(path.join(__dirname + '/templates/nearby_search.html'));
 });
 
 app.use('/css', express.static('css'))
 app.use('/js', express.static('js'))

app.listen(PORT, function() {
    console.log('app started on port ' + PORT + '!');
});
