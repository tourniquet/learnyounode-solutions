const net = require('net')

const port = process.argv[2]

const returnDate = () => {
  const date = new Date()

  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}\n`
}

const server = net.createServer(socket => {
  socket.write(returnDate())
  socket.end()
})

server.listen(port)
