var error = new Error("Error test")
if (!/invalid_05\.js/.test(error.stack)) {
	throw error
}