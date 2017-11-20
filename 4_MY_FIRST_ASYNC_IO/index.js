const fs = require('fs')

const file = process.argv[2]

fs.readFile(file, 'utf-8', (err, data) => {
  if (err) return

  console.log(data.split('\n').length - 1)
})
