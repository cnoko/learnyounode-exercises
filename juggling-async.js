const http = require('http');
const urls = process.argv.slice(2);
const bl = require('bl');
const content = [];
const callback = (err, data) => {
	if (err) {
		throw new Error(err);
	} else {
		content.push(data);
		if (content.length == urls.length) {
			content.forEach(data => console.log(data));
		}
	}
}
urls.forEach(url => {
	http.get(url, response => {
		response.setEncoding('utf8');
		response.pipe(bl((err, data) => {
			if(err) {
				callback(err);
			} else {
				const content = data.toString();
				callback(null, content);
			}
		}));
	});
});