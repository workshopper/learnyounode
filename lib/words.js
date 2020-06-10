const words = require('boganipsum/clean_words')

module.exports = words.sort(() => (0.5 - Math.random())).slice(0, 10)
