const app = require('./cluster/app')
const PORT = process.env.PORT || 5500

app.listen(PORT, () => console.log(`Listening on port ${PORT} and PID: ${process.pid}`))
