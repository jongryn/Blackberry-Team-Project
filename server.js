// Dependencies
// -----------------------------------------------------
var express         = require('express');
var port            = process.env.PORT || 3000;
var app             = express();

// Logging and Parsing
app.use(express.static(__dirname + '/public'));                 // sets the static files location to public

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname+'/public/index.html'));
});

// Listen
// -------------------------------------------------------
app.listen(port);
console.log('App listening on port ' + port);