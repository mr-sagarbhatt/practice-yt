import express from 'express'
import { getHome } from '../controllers/home.controller'

const homeRouter = express.Router()

homeRouter.get('/home', getHome)

export { homeRouter }
