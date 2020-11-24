const fs = require('fs');
const fileToRead = process.argv[2];
const buf = fs.readFileSync(fileToRead);


console.log(buf.toString().split("\n").length-1);
