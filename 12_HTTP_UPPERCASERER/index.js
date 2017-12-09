const http = require('http')

const port = process.argv[2]

const server = http.createServer((req, res) => {
  let body = ''

  req
  .setEncoding('utf-8')
    .on('data', chunk => {
      if (req.method === 'POST') {
        body += chunk.toString().toUpperCase()
      }
    })
    .on('end', () => {
      res.end(body)
    })
})

server.listen(port)
