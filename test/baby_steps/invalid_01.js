console.log(process.argv.reduce(function (before, current, count) {
	return (count < 2) ? 0 : before + current
}))