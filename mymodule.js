const fs = require('fs');
const path = require('path');

module.exports = function(dirName, ext, callback) {
	const fileExt = '.' + ext;
	fs.readdir(dirName, (err, list) => {
		if (err) {
			callback(err);
		} else {
			callback(null, list.filter(file => path.extname(file) === fileExt));
		}
	});
};