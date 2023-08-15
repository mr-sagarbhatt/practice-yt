import express from 'express'
import { getUserDetails } from '../controllers/user.controller'

const userRouter = express.Router()

userRouter.get('/users', getUserDetails)

export { userRouter }
