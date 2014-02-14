var express = require('express');
var instagram = require('./instagram');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));

app.use(express.static(__dirname + '/public'))

instagram.initiateInstagramRetrieval();

app.get('/', function(req, res) {
	instagram.getPictures(10, function (pictures) {
		res.render('index', {
			title : 'Alone with Bridget',
        	pictures: pictures
		});
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on port: " + port);
});