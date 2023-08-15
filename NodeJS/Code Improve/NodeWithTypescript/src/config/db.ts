import { connect } from 'mongoose'

const MONGO_URL = process.env.MONGO_URL
const DB_NAME = process.env.DB_NAME

const mongo_connection = async () => {
  try {
    const connection = await connect(`${MONGO_URL}/${DB_NAME}`)
    if (connection) {
      console.log(`DB connected!`)
    } else {
      console.log(`DB not connected!`)
    }
  } catch (e) {
    console.log(e)
  }
}

export default mongo_connection
