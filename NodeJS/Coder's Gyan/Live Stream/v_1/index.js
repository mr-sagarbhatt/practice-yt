const clusterApp = require('./cluster/app')
const PORT = process.env.PORT || 5500

clusterApp.listen(PORT, () => console.log(`Listening on port ${PORT} and PID: ${process.pid}`))
