const fs = require('fs')

module.exports = (path, extension, callback) => {
  fs.readdir(path, 'utf-8', (err, files) => {
    if (err) return callback(err)

    const arr = files.filter(file => file.includes(`.${extension}`))

    callback(null, arr)
  })
}
