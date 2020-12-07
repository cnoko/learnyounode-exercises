const port = process.argv[2];
const net = require('net');
const strftime = require('strftime');
const server = net.createServer(socket => {
	socket.write(strftime("%F %R", new Date()));
	socket.end("\r\n");
});

server.listen(port);