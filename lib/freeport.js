var net = require('net')

module.exports = () => {
  return new Promise((resolve, reject) => {
    var server = net.createServer()
    var port = 0

    server.once('listening', () => {
      port = server.address().port
      server.close()
    })
    server.once('close', () => {
      resolve(port)
    })
    server.once('error', reject)
    server.listen(0, '127.0.0.1')
  })
}