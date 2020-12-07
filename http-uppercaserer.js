const port = process.argv[2];
const file = process.argv[3];
const http = require('http');
const map = require('through2-map');
const server = http.createServer((req, res) => {
	if(req.method !== 'POST') {
		res.end("Wrong http method!\n");
		return;
	}
	res.writeHead(200, {'content-type': 'text/plain'});
	req.pipe(map(chunk => {
		return chunk.toString().toUpperCase();
	})).pipe(res);
});

server.listen(port);