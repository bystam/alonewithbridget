var ig = require('instagram-node').instagram();

ig.use({ client_id: 'dc28102ab5f144b591568c7488d2bae7',
         client_secret: 'f2fbbb39511d48049e3f2e98f93a8e2f' });

var instagramData = []

var loadInstagramData = function () {
	ig.tag_media_recent('bridgetjones', function(err, medias, pagination, limit) {
		instagramData = medias
		setTimeout(loadInstagramData, 10000);
	});
}

var initiateInstagramRetrieval = function () {
	loadInstagramData();
}

var getPictures = function (amount, callback) {
	var pictures = []
	for (var i = 0; i < amount; i++) {
		picture = instagramData[i]
		if (picture === undefined)
			break;
		var userData = {
			url: picture.images.standard_resolution.url,
			caption: picture.caption.text
		}
		pictures.push(userData)
	}
	callback(pictures)
}

exports.initiateInstagramRetrieval = initiateInstagramRetrieval;
exports.getPictures = getPictures;