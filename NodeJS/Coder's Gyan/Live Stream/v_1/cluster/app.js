const express = require('express')
const app = express()

app.get('/', async (req, res) => {
  let result = 0
  for (let i = 0; i < 1_00_00_00_00_000; i++) {
    result += i
  }
  return res.json({
    processId: process.pid,
    result,
  })
})

module.exports = app
