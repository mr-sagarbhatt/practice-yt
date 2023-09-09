require('dotenv').config()

module.exports = {
  port: process.env.PORT,
  mongoURI: process.env.MONGODB_ORDER_URI,
}
