// const os = require('os')
const cpuNums = require('os').cpus().length
const cluster = require('cluster')
const PORT = process.env.PORT || 5500

// The scheduling policy, either cluster.SCHED_RR for round-robin or cluster.SCHED_NONE to leave it to the operating system
cluster.schedulingPolicy = cluster.SCHED_RR
// cluster.schedulingPolicy = cluster.SCHED_NONE

console.log(`no of cores: ${cpuNums}`)

// * primary process
// cluster.isMaster Deprecated since: v16.0.0 | cluster.isPrimary Added in: v16.0.0
// True if the process is a primary. This is determined by the process.env.NODE_UNIQUE_ID. If process.env.NODE_UNIQUE_ID is undefined, then isPrimary is true.
if (cluster.isMaster) {
  // if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`)
  // running process on all cores
  // Fork workers.
  for (let i = 0; i < cpuNums; i++) {
    // fork: creates a child/ worker process
    cluster.fork() // * crates a copy/ instance of app and work in different process
  }

  // * Resiliency
  // if process is crashed? crates a new one child process
  // run callback on child process crashed
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`)
    cluster.fork()
  })
}
// * child(worker) process
else {
  console.log(`Worker/Child ${process.pid} is running`)

  const express = require('express')
  const app = express()

  app.get('/', async (req, res) => {
    let result = 0
    for (let i = 0; i < 10_000; i++) {
      result += i
    }
    return res.json({
      processId: process.pid,
      result,
    })
  })
  app.listen(PORT, () => console.log(`Listening on port ${PORT} and PID: ${process.pid}`))
}
