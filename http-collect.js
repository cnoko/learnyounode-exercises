const http = require('http');
const url = process.argv[2];
const bl = require('bl');

http.get(url, response => {
	response.setEncoding('utf8');
	response.pipe(bl((err, data) => {
		const content = data.toString();
		console.log(content.length);
		console.log(content);
	}));
})