const http = require('http')
const url = require('url')

const port = process.argv[2]

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true)

  res.writeHead(200, { 'Content-Type': 'application/json' })

  return reqUrl.pathname === '/api/parsetime'
  ? res.end(JSON.stringify(parsetime(reqUrl)))
  : res.end(JSON.stringify(unixtime(reqUrl)))
})

const parsetime = time => {
  const date = new Date(time.query.iso)

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

const unixtime = time => ({ 'unixtime': new Date(time.query.iso).getTime() })

server.listen(port)
