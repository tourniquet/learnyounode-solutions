const http = require('http')

const url = process.argv[2]

http
  .get(url, res => {
    const rawData = []

    res
      .setEncoding('utf-8')
      .on('data', data => {
        rawData.push(data)
      })
      .on('end', () => {
        console.log(rawData.join('').length)
        console.log(rawData.join(''))
      })
  })
  .on('error', err => {
    console.error(err.message)
  })
