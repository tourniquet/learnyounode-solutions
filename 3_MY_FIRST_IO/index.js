const fs = require('fs')

const file = process.argv[2]
const text = fs.readFileSync(file, 'utf-8')

console.log(text.split('\n').length - 1)
