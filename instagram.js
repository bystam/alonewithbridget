var ig = require('instagram-node').instagram();

ig.use({ client_id: 'dc28102ab5f144b591568c7488d2bae7',
         client_secret: 'f2fbbb39511d48049e3f2e98f93a8e2f' });

var getInstagramData = function (callback) {
	ig.tag_media_recent('bridgetjones', function(err, medias, pagination, limit) {
		callback(medias[0].images.standard_resolution.url)
	});
}

exports.getInstagramData = getInstagramData;