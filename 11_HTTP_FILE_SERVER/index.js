const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const file = process.argv[3]

const server = http.createServer((req, res) => {
  fs.readFile(file, 'utf-8', (err, data) => {
    if (err) return console.error(err)

    res.end(data)
  })
})

server.listen(port)
