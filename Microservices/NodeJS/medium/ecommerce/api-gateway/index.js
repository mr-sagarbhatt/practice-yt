const express = require('express')
const httpProxy = require('http-proxy')
require('dotenv').config()

// * Create a proxy server
const proxy = httpProxy.createProxyServer()

// * Creates an Express application
const app = express()

// * Route request to the auth service
app.use('/auth', (req, res) => proxy.web(req, res, { target: 'http://auth:3000' }))

// * Route request to the product service
app.use('/products', (req, res) => proxy.web(req, res, { target: 'http://product:3001' }))

// * Route request to the order service
app.use('/orders', (req, res) => proxy.web(req, res, { target: 'http://order:3002' }))

// * Start the server
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`API Gateway listening on port ${PORT}.`))
