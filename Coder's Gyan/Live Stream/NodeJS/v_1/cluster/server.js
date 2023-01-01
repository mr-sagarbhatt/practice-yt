const express = require('express')
const os = require('os')
const cluster = require('cluster')
const PORT = process.env.PORT || 5500

const cpuNums = os.cpus().length
console.log(`no of cores: ${cpuNums}`)

// * primary process
if (cluster.isPrimary) {
  // running process on all cores
  for (let i = 0; i < cpuNums; i++) {
    // fork: creates a child/ worker process
    cluster.fork() // * crates a copy/ instance of app and work in different process
  }

  // * Resiliency
  // if process is crashed? crates a new one child process
  // run callback on child process crashed
  cluster.on('exit', () => {
    cluster.fork()
  })
}
// * child(worker) process
else {
  const app = express()
  app.get('/', async (req, res) => {
    let result = 0
    for (let i = 0; i < 1_00_000; i++) {
      result += i
    }
    return res.json({
      processId: process.pid,
      result,
    })
  })

  app.listen(PORT, () => console.log(`Listening on port ${PORT} and PID: ${process.pid}`))
}
