const http = require('http')

const url = process.argv[2]

http
  .get(url, res => {
    res
      .setEncoding('utf-8')
      .on('data', data => {
        console.log(data)
      })
  })
  .on('error', err => {
    console.error(err.message)
  })
