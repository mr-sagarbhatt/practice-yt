import express, { Request, Response } from 'express'
import 'dotenv/config'
import mongo_connection from './config/db'
import { homeRouter } from './routes/home.routes'
import { userRouter } from './routes/user.routes'

const app = express()
const PORT = process.env.PORT

mongo_connection()

app.use(homeRouter)
app.use(userRouter)

app.get('/about', (req: Request, res: Response): void => {
  res.status(200).json({
    message: 'About Page',
  })
})

app.listen(PORT, (): void => {
  console.log(`Server is running on ${PORT} - http:localhost:${PORT}`)
})
