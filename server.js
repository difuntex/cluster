/*** server.js ***/
const http = require('http')

const processId = process.pid

const server = http.createServer((req, res) => {
  for (let index = 0; index < 1e7; index++);

  res.end(`Process handled by pid: ${processId}`)
})

server.listen(8080, () => {
  console.log(`Server Started in process ${processId}`)
})
