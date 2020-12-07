const port = process.argv[2];
const file = process.argv[3];
const http = require('http');
const middlewares = {
	'/api/parsetime': (req, res, iso) => {
		const date = new Date(iso);
		res.write(JSON.stringify({
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		}))
		res.end("\n");
	},
	'/api/unixtime': (req, res, iso) => {
		res.write(JSON.stringify({
			"unixtime": (new Date(iso)).getTime()
		}))
		res.end("\n");
	}
};
const server = http.createServer((req, res) => {
	const url = new URL(req.url, `http://localhost:${port}/`);
	const path = url.pathname;
	console.log(url);
	if (!middlewares[path]) {
		res.writeHead(401);
		return res.end("Not Found\n");
	}
	res.writeHead(200, {'Content-Type': 'application/json'});
	return middlewares[path](req,res, url.searchParams.get('iso'));
	
});

server.listen(port);