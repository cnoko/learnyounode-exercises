let total = 0;
for (let i = 2, max = process.argv.length; i < max; i++) {
	total += parseInt(process.argv[i]);
	//console.log(process.argv[i], total);
}
console.log(total);