const fs = require('fs')

const path = process.argv[2]
const extension = process.argv[3]

fs.readdir(path, 'utf-8', (err, files) => {
  if (err) return

  const arr = files.filter(file => file.includes(`.${extension}`))

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
})
