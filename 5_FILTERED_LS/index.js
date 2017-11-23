const fs = require('fs')

const path = process.argv[2]
const extension = process.argv[3]

fs.readdir(path, 'utf-8', (err, files) => {
  if (err) console.error(err)

  files
    .filter(file => file.includes(`.${extension}`))
    .map(file => console.log(file))
})
