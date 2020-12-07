const mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], (err, data) => {
	data.forEach(file => console.log(file));
});